import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IUser, IUserPost, IUserPostComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  };

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`);
  };

  getPostById(id: string): Observable<IUserPost> {
    return this.httpClient.get<IUserPost>(`${urls.posts}/${id}`);
  };

  getPostsById(id: string): Observable<IUserPost[]> {
    return this.httpClient.get<IUserPost[]>(`${urls.users}/${id}/posts`);
  };

  getPostCommentById(id: string): Observable<IUserPostComment> {
    return this.httpClient.get<IUserPostComment>(`${urls.comments}/${id}`);
  };

  getPostCommentsById(id: string): Observable<IUserPostComment[]> {
    return this.httpClient.get<IUserPostComment[]>(`${urls.posts}/${id}/comments`);
  };

}
