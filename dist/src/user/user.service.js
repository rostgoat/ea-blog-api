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
const user_entity_1 = require("./user.entity");
const post_service_1 = require("../post/post.service");
const mapper_1 = require("../shared/mapper");
const bcrypt = require('bcrypt');
let UserService = class UserService {
    constructor(userRepository, postService) {
        this.userRepository = userRepository;
        this.postService = postService;
    }
    async add(userDto) {
        const { name, password, username, email } = userDto;
        const userInDb = await this.userRepository.findOne({
            where: { username },
        });
        if (userInDb) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userRepository.create({
            name,
            password,
            username,
            email
        });
        await this.userRepository.save(user);
        return mapper_1.toUserDto(user);
    }
    async edit(uid, data) {
        await this.userRepository.update({ uid }, data);
        return this.userRepository.findOne({ uid });
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(uid) {
        return await this.userRepository.findOne({
            relations: ['posts', 'comments'],
            where: { uid },
        });
    }
    async findOneByUID(uid) {
        return await this.userRepository.findOne({
            relations: ['posts'],
            where: { uid: uid },
        });
    }
    async delete(uid) {
        await this.userRepository.delete(uid);
        return { deleted: true };
    }
    async findByLogin({ username, password }) {
        const user = await this.userRepository.findOne({ where: { username } });
        if (typeof user === 'undefined') {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await bcrypt.compare(password, user.password);
        if (!areEqual) {
            throw new common_1.UnauthorizedException({ message: 'Passwords don\'t match', error: common_1.HttpStatus.UNAUTHORIZED });
        }
        return mapper_1.toUserDto(user);
    }
    async findByPayload({ username }) {
        return await this.userRepository.findOne({ where: { username } });
    }
    async usersPostLikes() {
        return await typeorm_2.getRepository(user_entity_1.User)
            .createQueryBuilder('u')
            .select('DISTINCT(`user_id`)')
            .innerJoin('u.likes', 'l')
            .where('l.user_id = u.user_id')
            .getCount();
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, common_1.Inject(common_1.forwardRef(() => post_service_1.PostService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        post_service_1.PostService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map