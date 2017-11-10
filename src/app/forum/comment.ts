
import {User} from './user';

export class Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  timestamp: number;
  user?: User;
}
