import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private fs: AngularFirestore) { }

  saveSubscribers(subscriberData){
    this.fs.collection('subscribers').add(subscriberData).then(() => {
        console.log("Successfully Added")
    })
  }

  checkSubscribersEmail(subscriberEmail: string){
    return this.fs.collection('subscribers', ref => ref.where('email', '==', subscriberEmail)).get()
  }
}