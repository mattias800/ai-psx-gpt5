const fs = require('fs');
const { PNG } = require('pngjs');

// Check each BIOS animation frame
for (let i = 0; i < 8; i++) {
  const filename = `bios-anim-0${i}.png`;
  
  if (!fs.existsSync(filename)) {
    console.log(`${filename}: NOT FOUND`);
    continue;
  }
  
  const data = fs.readFileSync(filename);
  const png = PNG.sync.read(data);
  
  let nonBlackPixels = 0;
  let brightestPixel = 0;
  
  // Check all pixels
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const brightness = Math.max(r, g, b);
      
      if (brightness > 0) {
        nonBlackPixels++;
      }
      if (brightness > brightestPixel) {
        brightestPixel = brightness;
      }
    }
  }
  
  const totalPixels = png.width * png.height;
  const percentNonBlack = ((nonBlackPixels / totalPixels) * 100).toFixed(2);
  
  console.log(`${filename}: ${png.width}x${png.height}, ${nonBlackPixels} non-black pixels (${percentNonBlack}%), brightest=${brightestPixel}`);
}
