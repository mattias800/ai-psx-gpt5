import { describe, test } from 'vitest';
import { PSXSystem } from '../../packages/emulator-core/src/psx';
import * as fs from 'fs';
import * as path from 'path';

describe('Fake PlayStation logo display', () => {
  test('draws a fake PS logo to test display pipeline', () => {
    const sys = new PSXSystem();
    
    // Load BIOS (needed for system init)
    const biosPath = path.join(process.cwd(), 'scph1001.bin');
    if (!fs.existsSync(biosPath)) {
      console.log('BIOS not found, using blank');
      sys.loadBIOS(new Uint8Array(512 * 1024));
    } else {
      const biosBytes = fs.readFileSync(biosPath);
      sys.loadBIOS(biosBytes);
    }
    
    console.log('\\n=== Drawing fake PlayStation logo ===\\n');
    
    // Get direct GPU access
    const gpu = (sys as any).gpu;
    
    // Set display mode and enable
    gpu.writeGP1(0x08000001); // Display mode: 320x240, NTSC, 15-bit
    gpu.writeGP1(0x03000000); // Display enable
    gpu.writeGP1(0x05000000); // Start of display area (0,0)
    gpu.writeGP1(0x06000000); // Horizontal display range
    gpu.writeGP1(0x07000000); // Vertical display range
    
    // Clear screen to black
    gpu.writeGP0(0x02000000); // Fill rectangle command
    gpu.writeGP0(0x00000000); // Top-left (0, 0)
    gpu.writeGP0(0x00EF013F); // Size (320x240)
    
    // Draw \"PlayStation\" text approximation using colored rectangles
    // Draw 'P' shape in blue
    gpu.writeGP0(0x62001F00); // Flat rectangle, blue
    gpu.writeGP0(0x00300064); // Position (100, 48)
    gpu.writeGP0(0x00300008); // Size (8x48)
    
    gpu.writeGP0(0x62001F00); // Top of P
    gpu.writeGP0(0x00300064); // Position (100, 48)
    gpu.writeGP0(0x00081820); // Size (32x8)
    
    gpu.writeGP0(0x62001F00); // Middle of P
    gpu.writeGP0(0x00500064); // Position (100, 80)
    gpu.writeGP0(0x00081820); // Size (32x8)
    
    gpu.writeGP0(0x62001F00); // Right side of P
    gpu.writeGP0(0x0030007C); // Position (124, 48)
    gpu.writeGP0(0x00280008); // Size (8x40)
    
    // Draw 'S' shape in yellow
    gpu.writeGP0(0x627FE000); // Flat rectangle, yellow
    gpu.writeGP0(0x003000A0); // Position (160, 48)
    gpu.writeGP0(0x00081820); // Size (32x8)
    
    gpu.writeGP0(0x627FE000); // Middle of S
    gpu.writeGP0(0x005000A0); // Position (160, 80)
    gpu.writeGP0(0x00081820); // Size (32x8)
    
    gpu.writeGP0(0x627FE000); // Bottom of S
    gpu.writeGP0(0x007000A0); // Position (160, 112)
    gpu.writeGP0(0x00081820); // Size (32x8)
    
    gpu.writeGP0(0x627FE000); // Left side connections
    gpu.writeGP0(0x003800A0); // Position (160, 56)
    gpu.writeGP0(0x00180008); // Size (8x24)
    
    gpu.writeGP0(0x627FE000); // Right side connections
    gpu.writeGP0(0x005800B8); // Position (184, 88)
    gpu.writeGP0(0x00180008); // Size (8x24)
    
    // Add colorful triangles for decoration
    gpu.writeGP0(0x2000FF00); // Flat triangle, green
    gpu.writeGP0(0x00400030); // Vertex 1 (48, 64)
    gpu.writeGP0(0x00600020); // Vertex 2 (32, 96)
    gpu.writeGP0(0x00600040); // Vertex 3 (64, 96)
    
    gpu.writeGP0(0x207C0000); // Flat triangle, red
    gpu.writeGP0(0x004000E0); // Vertex 1 (224, 64)
    gpu.writeGP0(0x006000D0); // Vertex 2 (208, 96)
    gpu.writeGP0(0x006000F0); // Vertex 3 (240, 96)
    
    // Draw center logo area with gradient rectangles
    for (let i = 0; i < 5; i++) {
      const color = 0x62000000 | ((i * 0x1F / 4) << 10) | ((i * 0x1F / 4) << 5) | (0x1F - i * 0x1F / 4);
      const y = 140 + i * 10;
      gpu.writeGP0(color); // Flat rectangle with gradient colors
      gpu.writeGP0((y << 16) | 0x0050); // Position (80, y)
      gpu.writeGP0(0x000A00A0); // Size (160x10)
    }
    
    // Create output directory if needed
    const outputDir = path.join(process.cwd(), 'fake-logo-frames');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Capture several frames (simulate animation)
    for (let frame = 0; frame < 10; frame++) {
      // Add animated sparkles
      const sparkleX = 50 + (frame * 25);
      const sparkleY = 180;
      const sparkleColor = frame % 2 ? 0x627FFF00 : 0x62FFFF00;
      
      gpu.writeGP0(sparkleColor);
      gpu.writeGP0((sparkleY << 16) | sparkleX);
      gpu.writeGP0(0x00040004); // Small 4x4 sparkle
      
      // Save frame
      const framebuffer = gpu.getFramebuffer();
      const width = 1024;
      const height = 512;
      
      // Convert to PNG using simple format
      const PNG = require('pngjs').PNG;
      const png = new PNG({ width, height });
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          const vramIdx = y * width + x;
          const pixel = framebuffer[vramIdx];
          
          // Convert 15-bit RGB to 24-bit
          const r = ((pixel & 0x1F) * 255 / 31) | 0;
          const g = (((pixel >> 5) & 0x1F) * 255 / 31) | 0;
          const b = (((pixel >> 10) & 0x1F) * 255 / 31) | 0;
          
          png.data[idx] = r;
          png.data[idx + 1] = g;
          png.data[idx + 2] = b;
          png.data[idx + 3] = 255;
        }
      }
      
      const outputPath = path.join(outputDir, `frame_${frame.toString().padStart(3, '0')}.png`);
      fs.writeFileSync(outputPath, PNG.sync.write(png));
      console.log(`Saved frame ${frame} to ${outputPath}`);
    }
    
    console.log('\\n=== Fake logo display complete ===');
    console.log(`Frames saved to: ${outputDir}`);
  });
});
