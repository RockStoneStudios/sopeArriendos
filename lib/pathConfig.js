import path from 'path';

import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getPublicFilePath = (filename) => {
  return path.join(__dirname, 'public', filename);
};