import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Horror", "Technology"];

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpservice: BlogHttpService, private toastr: ToastrManager) {

  }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpservice.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },

      error => {
        console.log("error");
        console.log(error.errorMessage);
      }

    )

  }

  public editThisBlog() : any{

    this.blogHttpservice.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data =>{
        console.log(data);
        this.toastr.successToastr('Blog Edited', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.errorToastr('Something went Wrong!', 'Oops!');
      }
    )
  }
}
