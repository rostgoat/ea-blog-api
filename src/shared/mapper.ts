import { UserDTO } from '../user/user.dto';
import { User } from '../user/user.entity';
import { Post } from '../post/post.entity';
import { PostDTO } from '../post/post.dto';
import { PhotoDTO } from '../photo/photo.dto';
import { Photo } from '../photo/photo.entity';
import { Like } from '../like/like.entity';
import { LikeDTO } from '../like/like.dto';

export const toUserDto = (data: User): Partial<UserDTO> => {
  const { user_id, name, username, uid, email } = data;
  let userDto: Partial<UserDTO> = { user_id, name, username, uid, email };
  return userDto;
};

export const toPostDto = (data: Post): Partial<PostDTO> => {
  const { title, sub_title, content, uid } = data;
  let postDto: Partial<PostDTO> = { title, sub_title, content, uid };
  return postDto;
};

export const toPhotoDto = (data: Photo): Partial<PhotoDTO> => {
  const { title, path, uid } = data;
  let photoDto: Partial<PhotoDTO> = { title, path, uid };
  return photoDto;
};

export const toLikeDto = (data: Like): Partial<LikeDTO> => {
  const { post_liked, uid, user } = data;
  let photoDto: Partial<LikeDTO> = { post_liked, uid, user };
  return photoDto;
};

export const toDTO = (type: string, data: any) => {
  switch(type) {
    case "photo":
      return toPhotoDto(data)
    case "post":
      return toPostDto(data)
    case "user":
      return toUserDto(data)
    case "like":
      return toLikeDto(data)
  }
}