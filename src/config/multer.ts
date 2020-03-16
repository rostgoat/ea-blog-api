import { extname } from "path";
import { HttpException, HttpStatus } from "@nestjs/common";
import { diskStorage } from 'multer'
import { existsSync, mkdirSync } from "fs";
import uuid = require("uuid");

export const generateFilename = (file) => {
    return `${Date.now()}.${extname(file.originalname)}`;
}

export const multerConfig = {
    dest: process.env.UPLOAD_LOCATION,
};

// Multer upload options
export const multerOptions = {
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