import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getPostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { DialogService } from '../../services/dialog.service'
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../.././services/auth.service'
import { User } from '@angular/fire/auth';
=======
import { NbDialogService } from '@nebular/theme';
>>>>>>> a3b2206c99a17e424a6ffa74e88048118b5240c3

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedItem = '';


  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore
  }

  constructor(
<<<<<<< HEAD
    private store: Store<{ getPostReducer: getPostState }>,
    private activatedRoute: ActivatedRoute,
    private AuthService:AuthService
  ) {
    this.getPost$ = this.store.select((state) => state.getPostReducer);
    this.activatedRoute.params.subscribe((params: any) => {
      this.getPost(params.id)
    });
=======
      private store: Store<{ getPostReducer: getPostState }>,
      private activatedRoute: ActivatedRoute,
      private dialogService: NbDialogService
    ) {
      this.getPost$ = this.store.select((state) => state.getPostReducer);
      this.activatedRoute.params.subscribe((params:any) => {
        this.getPost(params.id)
      });
>>>>>>> a3b2206c99a17e424a6ffa74e88048118b5240c3
  }
  getPost$: Observable<getPostState>;
  

  ngOnInit(): void {
    this.getPost$.subscribe((res) => {
      console.log(res.post)
      this.post = res.post
    });    
  }

  public post!: Post;

  getPost(id: string) {
    console.log(id)
    this.store.dispatch(PostAction.getPost({ id }));
  }

<<<<<<< HEAD
  
=======
  popUp(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog)
  }
>>>>>>> a3b2206c99a17e424a6ffa74e88048118b5240c3
}

