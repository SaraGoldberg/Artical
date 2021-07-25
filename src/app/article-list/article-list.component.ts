import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  constructor(
    private _articleService: ArticleService,
    private _router: Router
  ) {
    this._articleService.getArticlesFromServer().subscribe((data) => {
      data.forEach((element) => {
        this.articles.push(element);
      });
    });
  }

  ngOnInit(): void {}

  selectedArticle?: Article;
  articles: Article[] = [];
  flag: boolean = false;

  handleClick(article: Article) {
    this.selectedArticle = article;
    console.log(this.selectedArticle);
    debugger;
    this._router.navigate(['/comments'], { state: { id: this.selectedArticle.id } });

    // this._router.navigate(['/comments', this.selectedArticle.id]);
  }
}
