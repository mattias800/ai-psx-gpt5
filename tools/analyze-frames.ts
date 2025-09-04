import { createCanvas, loadImage } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function analyzeFrame(framePath: string): Promise<{ hasContent: boolean; nonBlackPixels: number; avgBrightness: number }> {
  const image = await loadImage(framePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const data = imageData.data;
  
  let nonBlackPixels = 0;
  let totalBrightness = 0;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / 3;
    
    totalBrightness += brightness;
    
    // Check if pixel is not pure black
    if (r > 0 || g > 0 || b > 0) {
      nonBlackPixels++;
    }
  }
  
  const totalPixels = image.width * image.height;
  const avgBrightness = totalBrightness / totalPixels / 255 * 100; // As percentage
  
  return {
    hasContent: nonBlackPixels > 0,
    nonBlackPixels,
    avgBrightness
  };
}

async function createGifAnimation(framesDir: string, outputPath: string) {
  console.log('\\nCreating GIF animation...');
  
  // Check if ImageMagick is installed
  try {
    await execAsync('which convert');
  } catch {
    console.log('ImageMagick not found. Installing with Homebrew...');
    try {
      await execAsync('brew install imagemagick');
    } catch (error) {
      console.error('Failed to install ImageMagick. Please install it manually: brew install imagemagick');
      return false;
    }
  }
  
  // Create GIF with ImageMagick
  // -delay 2 = 20ms per frame (roughly 50fps)
  // -loop 0 = infinite loop
  // -scale 50% = reduce size for easier viewing
  const command = `convert -delay 2 -loop 0 -scale 50% ${framesDir}/frame_*.png ${outputPath}`;
  
  try {
    console.log('Running:', command);
    const { stdout, stderr } = await execAsync(command);
    if (stderr) console.log('ImageMagick warnings:', stderr);
    console.log(`GIF created successfully: ${outputPath}`);
    
    // Get file size
    const stats = fs.statSync(outputPath);
    const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`GIF size: ${fileSizeMB} MB`);
    
    return true;
  } catch (error: any) {
    console.error('Failed to create GIF:', error.message);
    return false;
  }
}

async function createGifWithCanvas(framesDir: string, outputPath: string) {
  console.log('\\nCreating animated GIF using canvas (fallback method)...');
  console.log('Note: This creates a summary image, not an animated GIF');
  
  // Get all frame files
  const frameFiles = fs.readdirSync(framesDir)
    .filter(f => f.startsWith('frame_') && f.endsWith('.png'))
    .sort()
    .slice(0, 20); // Take first 20 frames for summary
  
  if (frameFiles.length === 0) {
    console.log('No frames found!');
    return;
  }
  
  // Load first frame to get dimensions
  const firstFrame = await loadImage(path.join(framesDir, frameFiles[0]));
  const frameWidth = firstFrame.width;
  const frameHeight = firstFrame.height;
  
  // Create a grid layout (5x4 for 20 frames)
  const cols = 5;
  const rows = Math.ceil(frameFiles.length / cols);
  const summaryCanvas = createCanvas(frameWidth * cols, frameHeight * rows);
  const ctx = summaryCanvas.getContext('2d');
  
  // Fill with black background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, summaryCanvas.width, summaryCanvas.height);
  
  // Draw each frame
  for (let i = 0; i < frameFiles.length; i++) {
    const frame = await loadImage(path.join(framesDir, frameFiles[i]));
    const x = (i % cols) * frameWidth;
    const y = Math.floor(i / cols) * frameHeight;
    ctx.drawImage(frame, x, y);
    
    // Add frame number
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(frameFiles[i], x + 10, y + 30);
  }
  
  // Save as PNG
  const summaryPath = outputPath.replace('.gif', '_summary.png');
  const buffer = summaryCanvas.toBuffer('image/png');
  fs.writeFileSync(summaryPath, buffer);
  console.log(`Summary image created: ${summaryPath}`);
}

async function main() {
  const framesDir = path.join(process.cwd(), 'bios-frames');
  const outputGif = path.join(process.cwd(), 'bios-boot.gif');
  
  console.log('=== Frame Analysis Tool ===\\n');
  
  // Get all frame files
  const frameFiles = fs.readdirSync(framesDir)
    .filter(f => f.startsWith('frame_') && f.endsWith('.png'))
    .sort();
  
  console.log(`Found ${frameFiles.length} frames to analyze\\n`);
  
  if (frameFiles.length === 0) {
    console.log('No frames found in', framesDir);
    return;
  }
  
  // Analyze each frame
  const framesWithContent: string[] = [];
  let firstNonBlackFrame: string | null = null;
  let maxBrightness = 0;
  let brightestFrame = '';
  
  console.log('Analyzing frames for non-black content...');
  
  for (let i = 0; i < frameFiles.length; i++) {
    const framePath = path.join(framesDir, frameFiles[i]);
    const analysis = await analyzeFrame(framePath);
    
    if (analysis.hasContent) {
      framesWithContent.push(frameFiles[i]);
      if (!firstNonBlackFrame) {
        firstNonBlackFrame = frameFiles[i];
      }
      
      // Show progress for frames with content
      console.log(`  ${frameFiles[i]}: ${analysis.nonBlackPixels.toLocaleString()} non-black pixels (${analysis.avgBrightness.toFixed(2)}% brightness)`);
    }
    
    if (analysis.avgBrightness > maxBrightness) {
      maxBrightness = analysis.avgBrightness;
      brightestFrame = frameFiles[i];
    }
    
    // Show progress every 10 frames
    if ((i + 1) % 10 === 0) {
      process.stdout.write(`\\rProcessed ${i + 1}/${frameFiles.length} frames...`);
    }
  }
  
  console.log(`\\rProcessed ${frameFiles.length}/${frameFiles.length} frames...Done!\\n`);
  
  // Report results
  console.log('=== Analysis Results ===');
  console.log(`Total frames: ${frameFiles.length}`);
  console.log(`Frames with non-black pixels: ${framesWithContent.length}`);
  
  if (framesWithContent.length > 0) {
    console.log(`\\nFirst non-black frame: ${firstNonBlackFrame}`);
    console.log(`Brightest frame: ${brightestFrame} (${maxBrightness.toFixed(2)}% avg brightness)`);
    console.log('\\nFrames with content:');
    framesWithContent.slice(0, 10).forEach(f => console.log(`  - ${f}`));
    if (framesWithContent.length > 10) {
      console.log(`  ... and ${framesWithContent.length - 10} more`);
    }
  } else {
    console.log('\\n⚠️  All frames are completely black');
    console.log('This is expected - the BIOS needs MDEC implementation to decompress the PlayStation logo');
  }
  
  // Create GIF animation
  try {
    const gifCreated = await createGifAnimation(framesDir, outputGif);
    if (!gifCreated) {
      // Fallback to canvas-based summary
      await createGifWithCanvas(framesDir, outputGif);
    }
  } catch (error: any) {
    console.error('\\nError creating GIF:', error.message);
    // Try fallback method
    await createGifWithCanvas(framesDir, outputGif);
  }
  
  // Calculate duration
  const fps = 60;
  const durationSeconds = frameFiles.length / fps;
  console.log(`\\n=== Summary ===`);
  console.log(`Emulated duration: ${durationSeconds.toFixed(2)} seconds at ${fps} FPS`);
  console.log(`Output directory: ${framesDir}`);
  if (fs.existsSync(outputGif)) {
    console.log(`GIF animation: ${outputGif}`);
  }
  
  // Open the GIF if it was created
  if (fs.existsSync(outputGif)) {
    console.log('\\nOpening GIF in default viewer...');
    try {
      await execAsync(`open "${outputGif}"`);
    } catch {
      // Ignore errors from open command
    }
  }
}

main().catch(console.error);
