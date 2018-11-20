import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service'
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr:ToastrManager) {
  
   }

  public blogTitle: string;
  public blogDescription: string;
  public blogBody: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Horror", "Technology"];

  ngOnInit() {
  }

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBody,
      category: this.blogCategory
    }

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.successToastr('Blog Posted!', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog']);
        }, 1000)
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.errorToastr('Something went Wrong!', 'Oops!');
      }
    )
  }

}
