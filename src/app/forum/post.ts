import {User} from './user';

export class Post {
  id: number;
  content: string;
  img?: string;
  userId?: number;
  timestamp: string;
  author?: User;
}
