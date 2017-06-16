import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../comment/comment.model';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpCommentService {

    comment: Comment;

    constructor(private http: Http) {

    }

    getComments(): Observable<any> {
        return this.http.get("http://localhost:54042/api/Comments").map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    postComment(comment): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
            'http://localhost:54042/api/Comments',
            JSON.stringify(comment),opts).map(res => res.json());

    }

    deleteComment(accId: number, appId: number): Observable<any>
    {
        let header = new Headers();
        //header.append('Authorization', 'Bearer ' + this.localStorageService.get('token'));

        let opts = new RequestOptions();
        opts.headers = header;

        return this.http.delete(`http://localhost:54042/api/Comments/${accId}/${appId}`, opts);
    }

    updateComment(accId: number, appId:number, comm : Comment) : Observable<any>{

        const headers: Headers = new Headers();
       // headers.append('Accept', 'application/json');
        //headers.append('Content-type', 'application/json');
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

       return this.http.put(`http://localhost:54042/api/Comments/${accId}/${appId}`,
            JSON.stringify(comm),opts).map(res => res.json()); 
    }
}