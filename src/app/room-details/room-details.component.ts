import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit{
  id!:number;
  room!: Room;
  constructor(private route:ActivatedRoute,
    private router: Router,
    private roomService: RoomService){}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.room=new Room();
    this.roomService['getRoomById'](this.id).subscribe((data:Room)=>
    {
      this.room=data;
    }
    );
      
  }
}