/**
 * Comment data transfer object expected from controller
 */
export interface CommentDTO {
  comment_id: string;
  title: string;
  post_id: string;
  user_id: string;
}
