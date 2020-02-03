/**
 * User data transfer object expected from controller
 */
export interface UserDTO {
  user_id: string;
  name: string;
  posts: [
    {
      post_id: string;
      title: string;
    },
  ];
}
