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
class CommentDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { comment_id: { required: true, type: () => String }, uid: { required: true, type: () => String }, title: { required: true, type: () => String }, post_uid: { required: true, type: () => String }, post_id: { required: true, type: () => String }, user_id: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Primary Key',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "comment_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Comment UID',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Comment Title',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Post UID',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "post_uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Post Foreign Key',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "post_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User Foreign Key',
        type: String,
    }),
    __metadata("design:type", String)
], CommentDTO.prototype, "user_id", void 0);
exports.CommentDTO = CommentDTO;
//# sourceMappingURL=comment.dto.js.map