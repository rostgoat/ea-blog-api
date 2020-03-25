"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const DESCRIPTION = 'The EA Blog API';
const VERSION = '1.0.0';
exports.commonOptions = new swagger_1.DocumentBuilder()
    .setTitle('All API Methods')
    .setDescription(DESCRIPTION)
    .setVersion(VERSION)
    .build();
exports.usersOptions = new swagger_1.DocumentBuilder()
    .setTitle('Users')
    .setDescription(DESCRIPTION)
    .setVersion(VERSION)
    .build();
exports.postsOptions = new swagger_1.DocumentBuilder()
    .setTitle('Posts')
    .setDescription(DESCRIPTION)
    .setVersion(VERSION)
    .build();
exports.commentsOptions = new swagger_1.DocumentBuilder()
    .setTitle('Comments')
    .setDescription(DESCRIPTION)
    .setVersion(VERSION)
    .build();
//# sourceMappingURL=swagger.js.map