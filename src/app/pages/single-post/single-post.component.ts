import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{

  postData: any = {}
  similarPostData: Array<any> = []

  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      // this.postService.countViews(val['id'])
      this.postService.getSinglePostData(val['id']).subscribe(data => {
        this.postData = data
        this.fetchSimilarPosts(this.postData.category.categoryId)
      })
    })
  }

  fetchSimilarPosts(categoryId: string){
    this.postService.getSimilarPostData(categoryId).subscribe(val => {
        this.similarPostData = val
    })
  }

}
