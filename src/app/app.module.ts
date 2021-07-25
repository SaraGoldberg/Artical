import { BrowserModule } from '@angular/platform-browser';
// import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './article-list/article-list.component';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  // { path: 'comments/:id', component: CommentsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '', component: ArticleListComponent },
];

@NgModule({
  declarations: [AppComponent, ArticleListComponent, CommentsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
