import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Comment } from '../comment/comment.model';
import { NgForm } from '@angular/forms';
import { HttpCommentService } from "../services/http.comment.service";
import { HttpAccomodationService } from "../services/http.accomodation.service";
import { HttpAppUserService } from "../services/http.app-user.service";
import { Accomodation } from "../accomodation/accomodation.model";
import { AppUser } from "../app-user/app-user.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [
    HttpCommentService,
    HttpAccomodationService,
    HttpAppUserService
  ]
})
export class CommentComponent implements OnInit {

  comment: Comment;
  comments: Object[];
  accom: Accomodation;
  accoms: Object[];
  appUser: AppUser;
  appUsers: Object[];

  id: number;
  accName: string;

  constructor(private httpCommentService: HttpCommentService,
    private httpAccomodationService: HttpAccomodationService,
    private httpAppUserService: HttpAppUserService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpCommentService.getComments().subscribe(
      (co: any) => { this.comments = co; console.log(this.comments) },//You can set the type to Product.
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
    this.httpAccomodationService.getAccomodation().subscribe(
      (acc: any) => { this.accoms = acc; console.log(this.accoms) }
    );
    this.httpAppUserService.getAppUsers().subscribe(
      (au: any) => { this.appUsers = au; console.log(this.appUsers) }
    );
  }

  addComment(newComment: Comment, form: NgForm): void {
    this.httpCommentService.postComment(newComment).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }

  deleteComment(): void {
    this.httpCommentService.deleteComment(this.id).subscribe(
      (com: any) => { this.getAll() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editComment(): void {
    this.httpCommentService.updateComment(this.comment).subscribe(
      (com: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(id: number) {
    this.id = id;
  }

  setComment(com: Comment) {
    this.comment = com;
  }

  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
