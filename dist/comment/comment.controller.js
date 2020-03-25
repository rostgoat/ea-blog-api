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
const comment_service_1 = require("./comment.service");
const comment_dto_1 = require("./comment.dto");
const swagger_1 = require("@nestjs/swagger");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async create(data) {
        try {
            return this.commentService.add(data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(uid, data) {
        try {
            return this.commentService.edit(uid, data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(uid) {
        try {
            return this.commentService.delete(uid);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAllByPost(post_id, res) {
        try {
            return this.commentService.findAllByPostID(post_id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(uid) {
        try {
            return this.commentService.findOne(uid);
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
__decorate([
    common_1.Post('/create'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The comment has been successfully created.',
        type: comment_dto_1.CommentDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 201, type: require("./comment.entity").Comment }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    common_1.Put(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A comment has been successfully updated.',
        type: comment_dto_1.CommentDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: require("./comment.entity").Comment }),
    __param(0, common_1.Param('uid')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    common_1.Delete(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A comment has been successfully deleted.',
        type: comment_dto_1.CommentDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'All comments have been successfully retreived.',
        type: [comment_dto_1.CommentDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: [require("./comment.entity").Comment] }),
    __param(0, common_1.Param('uid')), __param(1, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAllByPost", null);
__decorate([
    common_1.Get(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A comment has been successfully retreived.',
        type: comment_dto_1.CommentDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: require("./comment.entity").Comment }),
    __param(0, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findOne", null);
CommentController = __decorate([
    swagger_1.ApiTags('comments'),
    common_1.Controller('comments'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map