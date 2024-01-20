import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  featuredPostData: Array<object> = []
  latestPostData: Array<object> = []

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.loadFeaturedPostData().subscribe(val => {
      this.featuredPostData = val
    })
    this.postService.loadLatestPostData().subscribe(val => {
      this.latestPostData = val
    })
  }

}
