import { extname } from "path";
import { HttpException, HttpStatus } from "@nestjs/common";
import { diskStorage } from 'multer'
import { existsSync, mkdirSync } from "fs";

/**
 * Generate unique filename
 * @param file File
 */
export const generateFilename = (file) => {
    return `${Date.now()}${extname(file.originalname)}`;
}

/**
 * Multer file system storage destination
 */
export const multerConfig = {
    dest: process.env.API_UPLOAD_LOCATION || './.tmp',
};

/**
 * Multer options for storing file paths in db and checking correct types
 */
export const multerOptions = {
    // limit image upload size to 1mb
    limits: {
        fileSize: +process.env.API_MAX_UPLOAD_FILE_SIZE || 1000000,
    },
    // Check the mimetypes to allow for upload
    fileFilter: (req: any, file: any, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            // Allow storage of file
            cb(null, true);
        } else {
            // Reject file
            cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
    },
    // Storage properties
    storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = multerConfig.dest;
            // Create folder if doesn't exist
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        // File modification details
        filename: (req, file, callback) => {
            callback(null, generateFilename(file));
          }
    }),
};