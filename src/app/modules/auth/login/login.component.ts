import { Component,OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastComponent } from '../../toaster/toast/toast.component';
import { ReactiveFormsModule,UntypedFormGroup,FormsModule,FormBuilder,Validators, FormGroup} from '@angular/forms';
import { Location } from '@angular/common';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,ToastComponent,ReactiveFormsModule,NgIf,FormsModule,ResetPasswordComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission here
      console.log('Form submitted!', this.loginForm.value);
    } else {
      // Mark all form controls as touched to display error messages
      this.loginForm.markAllAsTouched();
    }
  }
}


