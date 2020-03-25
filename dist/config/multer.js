"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const fs_1 = require("fs");
exports.generateFilename = (file) => {
    return `${Date.now()}${path_1.extname(file.originalname)}`;
};
exports.multerConfig = {
    dest: process.env.EA_API_UPLOAD_LOCATION || './.tmp',
};
exports.multerOptions = {
    limits: {
        fileSize: +process.env.EA_API_MAX_UPLOAD_FILE_SIZE || 1000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            cb(null, true);
        }
        else {
            cb(new common_1.HttpException(`Unsupported file type ${path_1.extname(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
        }
    },
    storage: multer_1.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = exports.multerConfig.dest;
            if (!fs_1.existsSync(uploadPath)) {
                fs_1.mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        filename: (req, file, callback) => {
            callback(null, exports.generateFilename(file));
        }
    }),
};
//# sourceMappingURL=multer.js.map