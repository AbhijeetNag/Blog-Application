import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-11-1",
      "created": "2018-11-1",
      "tag": [],
      "author": "admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "this is blog body",
      "description": "This is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2018-11-2",
      "created": "2018-11-2",
      "tag": [],
      "author": "admin",
      "category": "drama",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "this is blog body",
      "description": "This is blog 2 description",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2018-11-3",
      "created": "2018-11-3",
      "tag": [],
      "author": "admin",
      "category": "thriller",
      "isPublished": true,
      "views": 0,
      "bodyHTML": "<h3>this is blog body<h3>",
      "description": "This is blog 3 description",
      "title": "This is blog 3"
    }
  ]

  constructor() { }

  public getAllBlogs():any{
    return this.allBlogs;
  }
  //get singleblog Information
  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}
