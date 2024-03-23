import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit{
  id!:number
  room: Room= new Room();
  constructor(private roomService: RoomService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.roomService['getRoomById'](this.id).subscribe((data:Room)=>
    {
      this.room=data;
    },
    (error:any)=>console.log(error));
    
  }
  onSubmit()
  {
    this.roomService['updateRoom'](this.id,this.room).subscribe((data:any)=>
    {
      this.goToUserinfoList();
    },
    (error:any)=>console.log(error));
    
  }
  goToUserinfoList()
  {
    this.router.navigate(['/room']);
  }
  }