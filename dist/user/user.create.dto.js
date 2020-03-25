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
const class_validator_1 = require("class-validator");
class UserCreateDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, uid: { required: true, type: () => String }, name: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, post_id: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty({
        description: 'User Primary Key',
        type: String,
    }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "user_id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User UID',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "uid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User Name',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Username',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User Email',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'User Password',
        type: String,
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Blog Post Foreign Key',
        type: String,
    }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "post_id", void 0);
exports.UserCreateDTO = UserCreateDTO;
//# sourceMappingURL=user.create.dto.js.map