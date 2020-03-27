import { stat, mkdir, promises } from 'fs';
import mkdirp from 'mkdirp'

/**
 * Create new directory if one does not exist in the file system
 * @param dir Directory name
 */
export const createDir = async (directory) => {
    try {
      return await mkdirp(directory);
    } catch (error) {
      if (error.code != 'EEXIST') {
        throw error;
      }
    }
  };
