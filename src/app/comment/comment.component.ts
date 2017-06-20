import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Comment } from '../comment/comment.model';
import { NgForm } from '@angular/forms';
import { HttpCommentService } from "../services/http.comment.service";
import { HttpAccomodationService } from "../services/http.accomodation.service";
import { AuthService } from "../services/auth.service";
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
    HttpAppUserService,
    AuthService
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
  curUser: number;

  @Input() accomodationId: number;

  constructor(private httpCommentService: HttpCommentService,
    private httpAccomodationService: HttpAccomodationService,
    private httpAppUserService: HttpAppUserService,
    private authService: AuthService) { 
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    //this.httpCommentService.getComments().subscribe(
        this.httpCommentService.getCommentsForAcc(this.accomodationId).subscribe(   
        (co: any) => { this.comments = co; console.log(this.comments) },
        error => { alert("Unsuccessful fetch operation!"); console.log(error); }
         );
        //this.comment = null;

    this.httpAccomodationService.getApprovedAccomodations().subscribe(
      (acc: any) => { this.accoms = acc; console.log(this.accoms) }
    );
    /*this.httpAppUserService.getAppUsers().subscribe(
      (au: any) => { this.appUsers = au; console.log(this.appUsers) }
    );*/
  }


  addComment(newComment: Comment, form: NgForm): void {
    newComment.AppUserId = parseInt(localStorage.getItem('userID'));  //setuj comment id usera koji je ulogovan
    
    console.log(localStorage.getItem('userID'));
    newComment.AccomodationId = this.accomodationId;

    this.httpCommentService.postComment(newComment).subscribe(
      (co: any) => { this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error); }
    );
    form.reset();
  }

  deleteComment(): void {
    this.httpCommentService.deleteComment(this.accId, this.userId).subscribe(
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

  isUser(com: Comment): boolean {
    this.curUser = parseInt(localStorage.getItem('userID'));

    if(this.authService.isUserAppUser() && com.AppUserId == this.curUser) 
      return true;
    else
      return false;
  }
  isAppUser(): boolean{
    return this.authService.isUserAppUser();
  }

}
