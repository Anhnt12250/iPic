import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable, Subject, of, switchMap } from 'rxjs';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../actions/auth.action';
<<<<<<< HEAD
import { SuggestKeywordService } from './services/suggest-keyword.service';
=======
import { AuthService } from '../app/services/auth.service'
import { User } from '@angular/fire/auth';
>>>>>>> c2fa2248605f4cea74d8ade0474f57598b2782f4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  items = [{ title: 'Tạo Ghim ý tưởng' }, { title: 'Tạo Ghim' }];
  recentSearchs = ['Cat', 'Dog', 'Su Tu Ha Dong'];
  title = 'CLIENT';

  suggestBox: any;
  input: any;

  keywordsChange$ = new Subject<string>();
  keywords$ = new Observable<string[]>();
  idToken$ = this.store.select((state) => state.auth.idToken);

  constructor(
    private store: Store<{ auth: AuthState }>,
    private element: ElementRef,
<<<<<<< HEAD
    private suggestKeywords: SuggestKeywordService
  ) {
    this.keywords$ = this.keywordsChange$.pipe(
      switchMap(key => this.suggestKeywords.getSuggestKeyword(key))
    );
  }
=======
    private AuthService:AuthService
  ) { }
>>>>>>> c2fa2248605f4cea74d8ade0474f57598b2782f4

  ngAfterViewInit(): void {
    this.suggestBox = this.element.nativeElement.querySelector(
      '.suggestionContainer'
    );
    this.input = this.element.nativeElement.querySelector('#searchInput');
  }

  login() {
    this.store.dispatch(AuthActions.login());
  }

  onFocus() {
    this.suggestBox.classList.add('make-visible');
  }

  onFocusout() {
    if (
      this.input === document.activeElement ||
      this.suggestBox.matches(':hover')
    )
      return;
    this.suggestBox.classList.remove('make-visible');
  }

  public user! : User;

  biding() {
    this.AuthService.user$.subscribe (res => {
      console.log(res)
      this.user = res
    });
  }
}
