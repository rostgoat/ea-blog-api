import { stat, mkdir, promises } from 'fs';

/**
 * Create new directory if one does not exist in the file system
 * @param dir Directory name
 */
export const createDir = async (directory) => {
    try {
      return await promises.mkdir(directory);
    } catch (error) {
      if (error.code != 'EEXIST') {
        throw error;
      }
    }
  };
