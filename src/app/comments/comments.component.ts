import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment.model';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private _articleService: ArticleService,
    private _router: Router
  ) {
    // this.selected = this._router.getCurrentNavigation()!.extras!.id;
    debugger;
    this.selected = this._router.getCurrentNavigation()!.extras;
    this._articleService.getArticleComments(this.selected.state.id).subscribe((data) => {
      data!.comments!.forEach((element) => {
        this.articleComments.push(element);
      });
    });
    // console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'
  }

  ngOnInit(): void {}

  articleComments: Comment[] = [];
  option = 'Choose comment id';
  selected!: any;

  // @Input()
  // selectedArticle!: Article;

  choosedId(value: any, modal: any) {
    this.option = value;
    console.log(value);
    modal.dismiss('Cross click');
    // this.navigate("8");
  }
  clickLast() {
    let id = this.articleComments.length.toString();
    this.navigate(id);
  }

  navigate(id: string) {
    if (id == 'Choose comment id') alert('Please choose an id first');
    else document.getElementById('com' + id)!.scrollIntoView();
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  closeResult = '';

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
