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
            JSON.stringify({
                Grade: comment.Grade,
                Text: comment.Text,
                AccomodationId: comment.AccomodationId,
                AppUsersId: comment.AppUsersId
            }), opts);

    }
}