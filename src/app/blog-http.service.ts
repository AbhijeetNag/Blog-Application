import { Injectable } from '@angular/core';
//importing HTTP client and Http error response
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

//import RXjx and observables


import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public token="ZmU2MTBjM2ZmN2JjMDdhZGMwMmIyZDdlNzM0MmZiMTg3NGUwZjlkNjU3ZThjYWVlYWE2ZTVlMjczNzMyZjUwOTBkZGNlYzQ5MzBiNGFlNDAzNmIxZTljYjYzZDdmMDk3NzY5MzZlNDc2MWY4Y2ZkYTQyZDM3MDM5MWM0MjQzYWE3Yw==";
  public currentBlog;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs"

  constructor(private _http: HttpClient) {
    console.log("blog-http service was called");
  }
  //exception Handling
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
    
  }
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all'+'?authToken='+ this.token);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse=this._http.get(this.baseUrl+'/view/'+ currentBlogId+'?authToken='+ this.token);
    console.log(this.token);
    return myResponse;

  }
  //creating blog
  public createBlog(blogData): any{
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.token,blogData);
    return myResponse;
  }
//delete blog

  public deleteBlog(blogId):any{
    let data= {};
    let myResponse=this._http.post(this.baseUrl+'/' + blogId +'/delete' +'?authToken='+ this.token,blogId);
    return myResponse;
  }

//edit blog

  public editBlog(blogId,blogData): any{
    let myResponse=this._http.put(this.baseUrl+ '/' + blogId + '/edit' + '?authToken=' 
    + this.token,blogData);

    return myResponse;
  }
}
