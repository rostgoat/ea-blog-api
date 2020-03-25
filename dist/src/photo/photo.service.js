"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const photo_entity_1 = require("./photo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mapper_1 = require("../shared/mapper");
const sharp = require("sharp");
const fs = require("fs");
const path_1 = require("path");
let PhotoService = class PhotoService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
    }
    async add(data) {
        const { filename, path } = data;
        const title = filename;
        const newImageFilePath = await this.resizeImage(path, filename);
        const newPhoto = await this.photoRepository.create({
            title,
            path: newImageFilePath,
        });
        await this.photoRepository.save(newPhoto);
        return mapper_1.toDTO('photo', newPhoto);
    }
    async resizeImage(path, filename) {
        await sharp(path)
            .resize(300, 200, {
            fit: 'contain',
            background: 'white'
        })
            .toFile(`./uploads/${filename}`);
        fs.unlink(path, err => {
            if (err) {
                throw new Error('Could not delete image from .tmp directory!');
            }
        });
        return path_1.resolve(__dirname, `uploads/${filename}`);
    }
    async findOneByUID(uid) {
        return await this.photoRepository.findOne({
            where: { uid: uid },
        });
    }
};
PhotoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(photo_entity_1.Photo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhotoService);
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map