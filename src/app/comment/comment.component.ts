import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Comment } from '../comment/comment.model';
import { NgForm } from '@angular/forms';
import { HttpCommentService } from "app/services/http.comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [HttpCommentService]
})
export class CommentComponent implements OnInit {

  comment: Comment;
  comments: Object[];

  constructor(private httpCommentService: HttpCommentService) { }

  ngOnInit() {
    this.httpCommentService.getComments().subscribe(
      (co: any) => { this.comments = co; console.log(this.comments) },//You can set the type to Product.
      error => { alert("Unsuccessful fetch operation!"); console.log(error); }
    );
  }

  addComment(newComment: Comment, form: NgForm): void {
    this.httpCommentService.postComment(newComment).subscribe(
      (co: any) => {this.ngOnInit() },
      error => { alert("Unsuccessful insert operation!"); console.log(error);}
    );
    form.reset();
  }
  
  onPost(res: any): void {
    alert("Post!");
    console.log(res.json());
  }
}
