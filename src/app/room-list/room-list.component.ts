import { Component } from '@angular/core';
import { Room } from '../room';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  room!:Room[];
  //Room: any;
  constructor(private roomService:RoomService,private router:Router){}
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
    this.router.navigate(['room-details',id]);
  }
  updateRooms(id:number)
  {
    this.router.navigate(['update-room',id]);
  }
  deleteRooms(id:number)
  {
    this.roomService.deleteRoomById(id).subscribe(data=>
      {
        console.log(data);
        this.getRoom
     }
    )
 }
}