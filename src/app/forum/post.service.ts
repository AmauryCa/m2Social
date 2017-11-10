
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import {User} from './user';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Post> {
    return this.http.get<Post>('api/posts/' + id);
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('api/posts');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('api/users/' + id);
  }
}