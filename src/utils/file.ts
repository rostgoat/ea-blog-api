import * as mkdirp from 'mkdirp';
import { join } from 'path';

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
