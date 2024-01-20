import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { FirestoreModule } from '@angular/fire/firestore'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { TestingComponent } from './components/testing/testing.component';
// import { AngularFireModule } from '@angular/fire/app';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermConditionsComponent,
    ContactUsComponent,
    AboutUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
