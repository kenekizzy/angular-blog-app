import { Component, OnInit } from '@angular/core';
import { Sub } from 'src/app/models/sub';
import { SubService } from 'src/app/services/sub.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit{
  isEmailError: boolean = false
  isSubscribedUser: boolean = false

  constructor(private subService: SubService){}

  ngOnInit(): void {
    
  }

  onSubmit(formvalues: Sub){
    this.isEmailError = false
    this.isSubscribedUser = false
    this.subService.checkSubscribersEmail(formvalues.email).subscribe(val => {
      if(val.empty){
        this.subService.saveSubscribers(formvalues)
        this.isSubscribedUser = true
      }else{
        this.isEmailError = true
      }
    })
  }

}
