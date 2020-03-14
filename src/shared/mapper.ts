import { UserDTO } from '../user/user.dto';
import { User } from 'src/user/user.entity';
import { Post } from 'src/post/post.entity';
import { PostDTO } from 'src/post/post.dto';
import { PhotoDTO } from 'src/photo/photo.dto';
import { Photo } from 'src/photo/photo.entity';

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
  const { title, buffer, uid } = data;
  let photoDto: Partial<PhotoDTO> = { title, buffer, uid };
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
  }
}