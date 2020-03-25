"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
require("reflect-metadata");
const user_module_1 = require("./user/user.module");
const swagger_2 = require("./config/swagger/swagger");
const post_module_1 = require("./post/post.module");
const comment_module_1 = require("./comment/comment.module");
const express = require("express");
const path_1 = require("path");
const port = process.env.PORT || process.env.EA_API_PORT;
const CLENT_FILES = path_1.join(process.cwd(), './public/');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const commonDocument = swagger_1.SwaggerModule.createDocument(app, swagger_2.commonOptions);
    const userDocument = swagger_1.SwaggerModule.createDocument(app, swagger_2.usersOptions, {
        include: [user_module_1.UserModule],
    });
    const postDocument = swagger_1.SwaggerModule.createDocument(app, swagger_2.postsOptions, {
        include: [post_module_1.PostModule],
    });
    const commentDocument = swagger_1.SwaggerModule.createDocument(app, swagger_2.commentsOptions, {
        include: [comment_module_1.CommentModule],
    });
    swagger_1.SwaggerModule.setup('api', app, commonDocument);
    swagger_1.SwaggerModule.setup('api/users', app, userDocument);
    swagger_1.SwaggerModule.setup('api/posts', app, postDocument);
    swagger_1.SwaggerModule.setup('api/comments', app, commentDocument);
    if (process.env.NODE_ENV === 'production') {
        console.log('this is production');
        app.use(express.static(CLENT_FILES));
    }
    app.enableCors();
    await app.listen(port);
    common_1.Logger.log(`Server running on port http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map