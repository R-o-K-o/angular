import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IPost, IPostComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  };

  getById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`);
  };

  getPostCommentsById(id: string): Observable<IPostComment[]> {
    return this.httpClient.get<IPostComment[]>(`${urls.posts}/${id}/comments`);
  };

  getPostCommentById(id: string): Observable<IPostComment> {
    return this.httpClient.get<IPostComment>(`${urls.comments}/${id}`);
  };

}
