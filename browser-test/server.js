#!/usr/bin/env node

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.bin': 'application/octet-stream',
};

const server = createServer(async (req, res) => {
  try {
    let filePath = join(__dirname, '..', req.url);
    
    if (req.url === '/') {
      filePath = join(__dirname, 'index.html');
    }
    
    const ext = extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    const content = await readFile(filePath);
    
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
    
  } catch (error) {
    console.error('Error serving file:', req.url, error);
    res.writeHead(404);
    res.end('File not found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Open http://localhost:' + PORT + ' in your browser to test the PSX BIOS');
  console.log('Press Ctrl+C to stop the server');
});
