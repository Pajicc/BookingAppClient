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
  appUserr: AppUser;
  appUsers: Object[];

  userId: number;
  accId: number;
  accName: string;

  constructor(private httpCommentService: HttpCommentService,
    private httpAccomodationService: HttpAccomodationService,
    private httpAppUserService: HttpAppUserService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.httpCommentService.getComments().subscribe(
      (co: any) => { this.comments = co; console.log(this.comments) },
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
    newComment.AppUserId = parseInt(localStorage.getItem('userID'));  //setuj comment id usera koji je ulogovan
    
    console.log(localStorage.getItem('userID'));
    //newComment.AppUserId = 1;

    this.httpCommentService.postComment(newComment).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }

  deleteComment(): void {
    this.httpCommentService.deleteComment(this.userId, this.accId).subscribe(
      (com: any) => { this.getAll() },
      error => { alert("Unsuccessful delete!"); console.log(error); }
    );
  }

  editComment(): void {
    
    this.httpCommentService.updateComment(this.accId,this.userId,this.comment).subscribe(
      (com: any) => { this.getAll() },
      error => { alert("Unsuccessful edit!"); console.log(error); }
    );
  }

  setId(userId: number, accId: number) {
    this.userId = userId;
    this.accId = accId;
  }

  setComment(com: Comment) {
    this.comment = com;
  }

}
