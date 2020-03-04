import { UserDTO } from '../user/user.dto';
import { User } from 'src/user/user.entity';

export const toUserDto = (data: User): Partial<UserDTO> => {
  const { user_id, name, username } = data;
  let userDto: Partial<UserDTO> = { user_id, name, username };
  return userDto;
};
