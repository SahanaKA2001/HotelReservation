import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Userinfo } from '../userinfo';
import { UserService } from '../user.service';
import { Userinfo } from '../userinfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user :Userinfo=new Userinfo();
  studdata!: any;
  registrationForm: any = FormGroup;
  submitted = false;
  username: any;
  password: any;
  email: any;
  constructor(private fb: FormBuilder, private router: Router,private userService:UserService,private _http:HttpClient) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userFirstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      userLastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      userEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      userAge: ['', [Validators.required]],
      userContactNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      userGender: ['', [Validators.required]],
      userAddress: ['', [Validators.required]],
      userState: ['', [Validators.required]],
      userCountry: ['', [Validators.required]],
      userPincode: ['', [Validators.required]],
      userDistrict: ['', [Validators.required]],
      userPassword: ['', [Validators.required,Validators.minLength(8)]],
      //Validators.pattern('(?=.[A-Za-z])(?=.[0-9])(?=.[$@$!#^~%?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]
    });
  }
  get f() {
    return this.registrationForm.controls;
  }
  // saveUserinfo()
  // {
  //   this.userService['createUser'](this.user).subscribe((data:any)=>
  //   {
  //     console.log(data);
  //     this.goToEmployeeList();
  //   },
  //   (error:any)=>
  //   console.log(error));
  // }
    // goToEmployeeList()
    // {
    //   this.router.navigate(['user-header'])
    // }
  onSubmit(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    console.log("data>>",this.registrationForm.value)
    {
      let bodyData={
        "userName":this.username,
        "userEmail":this.email,
        "userPassword":this.password
      };
      this._http.post("http://localhost:8800/user",bodyData,{responseType:'text'})
        .subscribe((resultData:any)=>{
          console.log(resultData);
        });
      this._http.post<any>("http://localhost:8800/userInfo", this.registrationForm.value).subscribe(res => {
        alert("Registration Successful!!");
        this.registrationForm.reset();
        this.router.navigate(['user-login'])
      }, err => {
        // this.userService.error('something went wrong','hello')
      }
      )

    // console.log(JSON.stringify(this.registrationForm.value, null, 2));
    // // alert('Registration SUCCESSFUL !!')
    // console.log(this.registrationForm)
    // console.log(this.user);
    // this.saveUserinfo();

  }
}
}