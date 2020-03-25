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
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const user_create_dto_1 = require("./user.create.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(data) {
        try {
            return this.userService.add(data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(uid, data) {
        try {
            return this.userService.edit(uid, data);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async find() {
        try {
            return await this.userService.findAll();
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(uid) {
        return this.userService.findOne(uid);
    }
    async delete(uid) {
        try {
            return this.userService.delete(uid);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findUserLikes() {
        try {
            return await this.userService.usersPostLikes();
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
__decorate([
    common_1.Post('create'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The user has been successfully created.',
        type: user_create_dto_1.UserCreateDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Put(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'The user has been successfully updated.',
        type: user_dto_1.UserDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('uid')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Get('find'),
    swagger_1.ApiCreatedResponse({
        status: 200,
        description: 'All users have been successfully retreived.',
        type: [user_dto_1.UserDTO],
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    common_1.Get(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A user has been successfully retreived.',
        type: user_dto_1.UserDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':uid'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A user has been successfully deleted.',
        type: user_dto_1.UserDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    common_1.Get('likes'),
    swagger_1.ApiCreatedResponse({
        status: 201,
        description: 'A user has been successfully retreived.',
        type: user_dto_1.UserDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    openapi.ApiResponse({ status: 200, type: Number }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserLikes", null);
UserController = __decorate([
    swagger_1.ApiTags('users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map