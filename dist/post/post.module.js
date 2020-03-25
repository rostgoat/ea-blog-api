"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_controller_1 = require("./post.controller");
const post_service_1 = require("./post.service");
const post_entity_1 = require("./post.entity");
const user_module_1 = require("../user/user.module");
const comment_module_1 = require("../comment/comment.module");
const app_gateway_1 = require("../app.gateway");
const like_module_1 = require("../like/like.module");
let PostModule = class PostModule {
};
PostModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post]),
            common_1.forwardRef(() => user_module_1.UserModule),
            common_1.forwardRef(() => comment_module_1.CommentModule),
            common_1.forwardRef(() => like_module_1.LikeModule),
        ],
        controllers: [post_controller_1.PostController],
        providers: [post_service_1.PostService, app_gateway_1.AppGateway],
        exports: [post_service_1.PostService],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map