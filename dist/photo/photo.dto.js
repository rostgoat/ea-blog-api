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
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class PhotoDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_id: { required: true, type: () => String }, uid: { required: true, type: () => String }, filename: { required: true, type: () => String }, title: { required: true, type: () => String }, path: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Primary Key',
        type: String,
    }),
    __metadata("design:type", String)
], PhotoDTO.prototype, "photo_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Photo UID',
        type: String,
    }),
    __metadata("design:type", String)
], PhotoDTO.prototype, "uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Generated filename of uploaded photo',
        type: String,
    }),
    __metadata("design:type", String)
], PhotoDTO.prototype, "filename", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Title of Photo',
        type: String,
    }),
    __metadata("design:type", String)
], PhotoDTO.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'File System Path of Photo',
        type: String,
    }),
    __metadata("design:type", String)
], PhotoDTO.prototype, "path", void 0);
exports.PhotoDTO = PhotoDTO;
//# sourceMappingURL=photo.dto.js.map