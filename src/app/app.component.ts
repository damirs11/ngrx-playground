import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserApiActions } from './core/store/actions';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
  }
}
