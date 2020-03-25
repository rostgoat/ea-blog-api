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
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const post_entity_1 = require("../post/post.entity");
let Photo = class Photo {
    async generateUID() {
        this.uid = uuid_1.v4();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_id: { required: true, type: () => String }, uid: { required: true, type: () => String }, path: { required: true, type: () => String }, title: { required: true, type: () => String }, post: { required: true, type: () => require("../post/post.entity").Post } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Photo.prototype, "photo_id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false, unique: true }),
    __metadata("design:type", String)
], Photo.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Photo.prototype, "path", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Photo.prototype, "title", void 0);
__decorate([
    typeorm_1.OneToOne(type => post_entity_1.Post, {
        cascade: true,
    }),
    typeorm_1.JoinColumn({ name: 'post_id' }),
    __metadata("design:type", post_entity_1.Post)
], Photo.prototype, "post", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Photo.prototype, "generateUID", null);
Photo = __decorate([
    typeorm_1.Entity('photos')
], Photo);
exports.Photo = Photo;
//# sourceMappingURL=photo.entity.js.map