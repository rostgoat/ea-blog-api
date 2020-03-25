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
const user_entity_1 = require("../user/user.entity");
class LikeDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { like_id: { required: true, type: () => String }, uid: { required: true, type: () => String }, liked_at: { required: true, type: () => Date }, post_liked: { required: true, type: () => Object }, post_uid: { required: true, type: () => String }, user_uid: { required: true, type: () => String }, user: { required: true, type: () => require("../user/user.entity").User } };
    }
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Primary Key',
        type: String,
    }),
    __metadata("design:type", String)
], LikeDTO.prototype, "like_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Like UID',
        type: String,
    }),
    __metadata("design:type", String)
], LikeDTO.prototype, "uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Like liked at Date',
        type: Date,
    }),
    __metadata("design:type", Date)
], LikeDTO.prototype, "liked_at", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Flag that determines if the post is liked by a user',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], LikeDTO.prototype, "post_liked", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Post Foreign Key',
        type: String,
    }),
    __metadata("design:type", String)
], LikeDTO.prototype, "post_uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User Foreign Key',
        type: String,
    }),
    __metadata("design:type", String)
], LikeDTO.prototype, "user_uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User ',
        type: user_entity_1.User,
    }),
    __metadata("design:type", user_entity_1.User)
], LikeDTO.prototype, "user", void 0);
exports.LikeDTO = LikeDTO;
//# sourceMappingURL=like.dto.js.map