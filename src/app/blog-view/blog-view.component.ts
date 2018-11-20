import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from "@angular/common";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;



  constructor(private _route: ActivatedRoute,private location: Location, private router: Router, public blogService: BlogService, public blogHttpservice: BlogHttpService, private toastr:ToastrManager) {

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

  public deleteThisBlog():any{

    this.blogHttpservice.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.successToastr('Blog Deleted', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.errorToastr('Something went Wrong!', 'Oops!');
      }
    )
  }//end of delete

public goBackToPreviousPage(): any{
  this.location.back(); 
}

}
