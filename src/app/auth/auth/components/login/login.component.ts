import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials } from '@api/auth/request/credentials';
import { UzedoError } from '@uzedo-app/api/common/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() set pending(isPending: boolean | null) {
    if (isPending) {
      this.authForm.disable();
    } else {
      this.authForm.enable();
    }
  }

  @Input() errorMessage!: UzedoError | null;

  @Output() submitted = new EventEmitter<Credentials>();

  authForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.authForm.valid) {
      this.submitted.emit(this.authForm.value);
    }
  }
}
