import { UserDTO } from '../user/user.dto';
import { User } from 'src/user/user.entity';
import { Post } from 'src/post/post.entity';
import { PostDTO } from 'src/post/post.dto';

export const toUserDto = (data: User): Partial<UserDTO> => {
  const { user_id, name, username, uid, email } = data;
  let userDto: Partial<UserDTO> = { user_id, name, username, uid, email };
  return userDto;
};

export const toPostDto = (data: Post): Partial<PostDTO> => {
  const { title, sub_title, content, uid } = data;
  let userDto: Partial<PostDTO> = { title, sub_title, content, uid };
  return userDto;
};
