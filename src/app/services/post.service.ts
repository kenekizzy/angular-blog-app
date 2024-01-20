import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
// import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private fs: AngularFirestore) { }

  loadFeaturedPostData(){
    return this.fs.collection("posts", ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, data}
        })
      })
    )
  }

  loadLatestPostData(){
    return this.fs.collection("posts", ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, data}
        })
      })
    )
  }

  getSingleCategoryPost(categoryId: string){
    return this.fs.collection("posts", ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, data}
        })
      })
    )
  }

  getSinglePostData(postId: string){
    return this.fs.collection('posts').doc(postId).valueChanges()
  }

  getSimilarPostData(categoryId: string){
    return this.fs.collection("posts", ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, data}
        })
      })
    )
  }

  // countViews(postId: string){
  //   const viewsCount = {
  //     views: firebase.firestore.FieldValue.increment(1)
  //   }
  //   return this.fs.collection('posts').doc(postId).update(viewsCount)
  // }
}
    