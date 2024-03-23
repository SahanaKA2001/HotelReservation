import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';
@Component({
 selector: 'app-create-room',
 templateUrl: './create-room.component.html',
 styleUrls: ['./create-room.component.css']
})
export class CreateroomComponent implements OnInit {
 room: Room= new Room();
 //UserService: any;
 constructor(private roomService: RoomService,private router: Router){}

 ngOnInit(): void {

}
 saveRoom()
 {
 this.roomService['createRoom'](this.room).subscribe( (data: any)=>
 {
 console.log(data);
 this.goToRoomList();
 },
 (error:any)=>
 console.log(error));
 }
 goToRoomList()
 {
 this.router.navigate(['/room']);
 }
  onSubmit()
{
 console.log(this.room);
 this.saveRoom();
 }
}