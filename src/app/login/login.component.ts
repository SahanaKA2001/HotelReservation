import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = '';
  userPassword = '';
  invalidCredentials = false;

  constructor(private router: Router) {}
  onSubmit(): void {
 
    if (this.userName === 'Admin' && this.userPassword === 'admin123') {
      this.router.navigate(['/admin-header']);
    } else {
      this.invalidCredentials = true;
      this.showAlert();
    
    
  }
}

showAlert() {
  // Display an alert when the "Show Alert" button is clicked
  alert('Invalid username or password!');
}

}




// loginForm: any = FormGroup;
// submitted = false;
// constructor(private frombuilders: FormBuilder, private http: HttpClient, private router: Router) { }

// ngOnInit(): void {
//   this.loginForm = this.frombuilders.group({
//     email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
//     password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('')]],
//   });
// }
// get f() {
//   return this.loginForm.controls;
// }
// onSubmit(): void {

//   this.submitted = true;

//   if (this.loginForm.invalid) {
//     return;
//   }

//   // console.log(JSON.stringify(this.loginForm.value, null, 2));
//   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4))
//   // console.log(this.loginForm)

//   this.http.get<any>("http://localhost:3000/signup").subscribe(res =>{
//     const user = res.find((a: any) => {
//       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
//     })
//     if(user) {
//       alert("login is successfull");
//       this.loginForm.reset();
//       this.router.navigate(['data'])
//     } else {
//       alert("user not found")
//     }
//   }, err => {
//     alert("server error")
//   }
//   )
  

// }

// }