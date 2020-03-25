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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const like_dto_1 = require("./like.dto");
const like_service_1 = require("./like.service");
let LikeController = class LikeController {
    constructor(likesService) {
        this.likesService = likesService;
    }
    async create(data) {
        try {
            return this.likesService.add(data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async unlike(data) {
        try {
            return this.likesService.edit(data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async relike(data) {
        try {
            return this.likesService.edit(data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAndCount(req) {
        try {
            const { post_uid } = req.query;
            return this.likesService.findLikeCount(post_uid);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAllPostLikes() {
        try {
            return this.likesService.findAllPostLikes();
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
__decorate([
    common_1.Post('like'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The post has been successfully liked.',
        type: like_dto_1.LikeDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dto_1.LikeDTO]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "create", null);
__decorate([
    common_1.Put('unlike'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The post has been successfully unliked.',
        type: like_dto_1.LikeDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dto_1.LikeDTO]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "unlike", null);
__decorate([
    common_1.Put('relike'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The post has been successfully reliked.',
        type: like_dto_1.LikeDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dto_1.LikeDTO]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "relike", null);
__decorate([
    common_1.Get('likes'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'All likes have been successfully retreived.',
        type: [like_dto_1.LikeDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "findAndCount", null);
__decorate([
    common_1.Get('post_likes'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'All likes have been successfully retreived.',
        type: [like_dto_1.LikeDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "findAllPostLikes", null);
LikeController = __decorate([
    swagger_1.ApiTags('posts'),
    common_1.Controller('likes'),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
exports.LikeController = LikeController;
//# sourceMappingURL=like.controller.js.map