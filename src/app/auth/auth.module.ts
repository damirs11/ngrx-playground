import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NebularModule } from '../shared/nebular.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import * as fromAuth from './store/reducers';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature([AuthEffects]),

    NebularModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
