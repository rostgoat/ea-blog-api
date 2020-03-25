"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../user/user.entity");
const post_entity_1 = require("../post/post.entity");
const post_dto_1 = require("../post/post.dto");
const photo_dto_1 = require("../photo/photo.dto");
const photo_entity_1 = require("../photo/photo.entity");
const like_entity_1 = require("../like/like.entity");
const like_dto_1 = require("../like/like.dto");
exports.toUserDto = (data) => {
    const { user_id, name, username, uid, email } = data;
    let userDto = { user_id, name, username, uid, email };
    return userDto;
};
exports.toPostDto = (data) => {
    const { title, sub_title, content, uid } = data;
    let postDto = { title, sub_title, content, uid };
    return postDto;
};
exports.toPhotoDto = (data) => {
    const { title, path, uid } = data;
    let photoDto = { title, path, uid };
    return photoDto;
};
exports.toLikeDto = (data) => {
    const { post_liked, uid, user } = data;
    let photoDto = { post_liked, uid, user };
    return photoDto;
};
exports.toDTO = (type, data) => {
    switch (type) {
        case "photo":
            return exports.toPhotoDto(data);
        case "post":
            return exports.toPostDto(data);
        case "user":
            return exports.toUserDto(data);
        case "like":
            return exports.toLikeDto(data);
    }
};
//# sourceMappingURL=mapper.js.map