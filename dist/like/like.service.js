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
const like_entity_1 = require("./like.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_service_1 = require("../post/post.service");
const user_service_1 = require("../user/user.service");
const mapper_1 = require("../shared/mapper");
let LikeService = class LikeService {
    constructor(likesRepository, userService, postService) {
        this.likesRepository = likesRepository;
        this.userService = userService;
        this.postService = postService;
    }
    async add(data) {
        const { user_uid, post_uid } = data;
        const user = await this.userService.findOneByUID(user_uid);
        const post = await this.postService.findOne(post_uid);
        const likeArgs = {
            post_liked: true,
            liked_at: Date.now(),
        };
        let newLike = await this.likesRepository.create(likeArgs);
        if (user.uid === user_uid) {
            newLike.user = user;
        }
        else {
            throw new Error('Invalid user!');
        }
        if (post.uid === post_uid) {
            newLike.post = post;
        }
        const { uid } = await this.likesRepository.save(newLike);
        post.likes.push(uid);
        return mapper_1.toLikeDto(newLike);
    }
    async edit(data) {
        const { uid, post_liked } = data;
        let updatedLikeStatus = !post_liked;
        await this.likesRepository.update({ uid }, { post_liked: updatedLikeStatus });
        const updatedLike = await this.likesRepository.findOne({ uid });
        return mapper_1.toLikeDto(updatedLike);
    }
    async findOne(uid) {
        return await this.likesRepository.findOne({
            where: {
                uid,
            },
        });
    }
    async findLikeCount(post_uid) {
        const { post_id } = await this.postService.findOne(post_uid);
        return await typeorm_2.getRepository(like_entity_1.Like)
            .createQueryBuilder('l')
            .select('DISTINCT(`like_id`)')
            .innerJoin('l.post', 'p')
            .where('l.post_liked = true AND l.post_id = :post_id', { post_id })
            .getCount();
    }
    async findAllPostLikes() {
        const likes = await typeorm_2.getRepository(like_entity_1.Like)
            .createQueryBuilder('l')
            .select(['l.uid'])
            .addSelect('l.post_liked', 'post_liked')
            .addSelect('post.uid', 'post_uid')
            .addSelect('user.uid', 'user_uid')
            .innerJoin('l.post', 'post')
            .innerJoin('l.user', 'user')
            .getRawMany();
        let out = {};
        likes.forEach(like => {
            out[like.post_uid] = like;
        });
        return out;
    }
};
LikeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(like_entity_1.Like)),
    __param(1, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __param(2, common_1.Inject(common_1.forwardRef(() => post_service_1.PostService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        post_service_1.PostService])
], LikeService);
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map