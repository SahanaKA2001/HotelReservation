import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { BookroomService } from '../bookroom.service';
import { Router } from '@angular/router';
import { Bookroom } from '../bookroom';

declare var Razorpay:any;

@Component({
  selector: 'app-create-bookroom',
  templateUrl: './create-bookroom.component.html',
  styleUrls: ['./create-bookroom.component.css']
})
export class CreateBookroomComponent implements OnInit{
  room: Bookroom= new Bookroom();
  constructor(private bookroomService: BookroomService,private router: Router){}
  
  ngOnInit(): void {
      
  }
  saveRoom()
  {
    this.bookroomService['createBookRoom'](this.room).subscribe( (data: any)=>
    {
      console.log(data);
      this.goToRoomList();

    },
    (error:any)=>
    console.log(error));
  }
    goToRoomList()
    {
    this.router.navigate(['/user']);
  }
  onSubmit()
  {
    console.log(this.room);
    this.saveRoom();
    alert("Booking Successful")
    this.router.navigate(['/home']);
  }
  goToRoomDetails(data: any) {
    this.router.navigate(['/details-bookroom'], { state: { detailsBookroom: data } });
  }

  title = 'RaPay';
  payNow(){
    const razorpayOptions ={
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount:this.room.cost*100,
      name: 'Hotel Paradise',
      key: 'rzp_test_BJylNisI1b1J8p',
      image: 'src/assets/Admin.jpg',
      prefills: {
        name: 'Mohana Priya',
        email: 'mohanapriyah1998@gmail.com',
        phone: '9176845775'
      },
      theme: {
        color: '#f37254'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        }
      }
    }
    const successCallback= (paymentid: any) => {
      console.log(paymentid);
      //this.showalert();
     
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }
  
    Razorpay.open(razorpayOptions,successCallback, failureCallback)
  }
  
}