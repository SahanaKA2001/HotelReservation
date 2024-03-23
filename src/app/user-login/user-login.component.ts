import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private httpClient: HttpClient) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const userNameControl = this.loginForm.get('userName');
    const userPasswordControl = this.loginForm.get('userPassword');
  
    if (userNameControl && userPasswordControl) {
      const userName = userNameControl.value;
      const userPassword = userPasswordControl.value;
  
      if (userName.trim() === '' || userPassword.trim() === '') {
        alert('Please enter valid credentials');
        return; 
      }
  
      const credentials = {
        email: userName,
        password: userPassword
      };
  
      this.httpClient.post('http://localhost:8800/user', credentials).subscribe(
        (response: any) => {
          alert('Login successful');
          console.log('Login successful:', response);
          this.router.navigate(['/user-header']);
        },
        (error: any) => {
          alert('Login failed. Please check your credentials.');
          console.error('Login failed:', error);
        }
      );
    } else {
      console.error('Form controls are null');
    }
  }
}