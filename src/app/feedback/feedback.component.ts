import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
  user: Feedback= new Feedback();
  //UserService: any;
  constructor(private feedbackService: FeedbackService,private router: Router){}
  
  ngOnInit(): void {
      
  }
  saveUser()
  {
    this.feedbackService['createFeedback'](this.user).subscribe( (data: any)=>
    {
      console.log(data);
      this.goToUserList();

    },
    (error:any)=>
    console.log(error));
  }
    goToUserList()
    {
    this.router.navigate(['/home']);
   
  }
  onSubmit()
  {
    console.log(this.user);
    this.saveUser();
    alert("Feedback Submitted Successfully!!")
  }

}