import * as mkdirp from 'mkdirp';
import { join } from 'path';
const fs = require('bluebird').promisifyAll(require('fs'))

/**
 * Create new directory if one does not exist in the file system
 * @param dir Directory name
 */
export const createDir = async directory => {
  try {
    const dirPath = join(__dirname, directory);
    return await mkdirp(dirPath);
  } catch (error) {
    if (error.code != 'EEXIST') {
      throw error;
    }
  }
};

//check if a file/directory exists, return Promise
export const existsAsync = path => {
  return new Promise((resolve, reject) => {
    return fs.accessAsync(path, fs.F_OK, (err, data) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

export const createReadStream = filename => {
  return new Promise((resolve, reject) => {
    let stream = fs.createReadStream(filename);

    stream.on('error', err => {
      reject(err);
    });

    stream.on('open', () => {
      resolve(stream);
    });
  });
};
