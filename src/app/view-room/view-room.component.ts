import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent {
  room!:Room[];
  //Room: any;
  constructor(private roomService:RoomService,private router:Router,private _http:HttpClient){}
  ngOnInit(): void {
      this.getRoom();
  }
  private getRoom()
  {
    this.roomService.getRoom().subscribe(data=>
      {
        this.room=data;
      }
      );
  }
  Rooms(id:number)
  {
    this.router.navigate(['create-bookroom']);
    
  }
  
  // onSubmit(): void {
  // {
  //   this._http.post<any>("http://localhost:8080/room", this.room).subscribe(res => {
  //     alert("Registration Successful!!");
  //     // this.userService.success('jfjs','hfshj')
  //     // this.registrationForm.reset();
  //     this.router.navigate(['user-header'])
  //   }, err => {
  //     // this.userService.error('something went wrong','hello')
  //   }
  //   )
  // }
// }
}