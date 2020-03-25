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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bluebird_1 = require("bluebird");
const post_entity_1 = require("./post.entity");
const user_service_1 = require("../user/user.service");
const comment_service_1 = require("../comment/comment.service");
const mapper_1 = require("../shared/mapper");
const photo_service_1 = require("../photo/photo.service");
const like_service_1 = require("../like/like.service");
let PostService = class PostService {
    constructor(postRepository, userService, commentService, photoService, likeService) {
        this.postRepository = postRepository;
        this.userService = userService;
        this.commentService = commentService;
        this.photoService = photoService;
        this.likeService = likeService;
    }
    async add(data) {
        data = Object.assign(data, { created_at: Date.now() });
        const newPost = await this.postRepository.create(data);
        const user = await this.userService.findOneByUID(data.user_uid);
        if (user.uid === data.user_uid) {
            newPost.user = user;
        }
        else {
            throw new Error('Invalid user!');
        }
        const photo = await this.photoService.findOneByUID(data.post_image_uid);
        if (photo.uid === data.post_image_uid) {
            newPost.photo = photo;
        }
        await this.postRepository.save(newPost);
        return mapper_1.toPostDto(newPost);
    }
    async edit(uid, data) {
        await this.postRepository.update({ uid }, data);
        return await this.postRepository.findOne({ uid });
    }
    async delete(uid) {
        const comments = await this.commentService.findAllByPostID(uid);
        await bluebird_1.Promise.each(comments, async (comment) => {
            await this.commentService.delete(comment.comment_id);
        });
        await this.postRepository.delete(uid);
        return { deleted: true };
    }
    async findAllByPostID(uid) {
        return await this.postRepository.find({
            where: { uid },
        });
    }
    async findAll() {
        let posts = await typeorm_2.getRepository(post_entity_1.Post)
            .createQueryBuilder('p')
            .distinctOn(['p.uid'])
            .addSelect('p.title', 'post_title')
            .addSelect('p.sub_title', 'post_subtitle')
            .addSelect('p.content', 'post_content')
            .addSelect('p.created_at', 'post_created_at')
            .addSelect('u.name', 'post_author')
            .addSelect('ph.title', 'photo_title')
            .addSelect('ph.path', 'path')
            .leftJoin('p.likes', 'l')
            .innerJoin('p.photo', 'ph')
            .innerJoin('p.user', 'u')
            .getRawMany();
        const likes = await this.likeService.findAllPostLikes();
        posts.forEach(post => {
            if (likes[post.p_uid]) {
                post.likes = [likes[post.p_uid]];
            }
        });
        return posts;
    }
    async findOne(uid) {
        return await this.postRepository.findOne({
            select: ['post_id', 'uid', 'content', 'created_at', 'sub_title', 'title'],
            relations: ['comments', 'user', 'photo'],
            where: {
                uid,
            },
        });
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.Post)),
    __param(1, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __param(2, common_1.Inject(common_1.forwardRef(() => comment_service_1.CommentService))),
    __param(3, common_1.Inject(common_1.forwardRef(() => photo_service_1.PhotoService))),
    __param(4, common_1.Inject(common_1.forwardRef(() => like_service_1.LikeService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        comment_service_1.CommentService,
        photo_service_1.PhotoService,
        like_service_1.LikeService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map