import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
[x: string]: any;
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
goToHome(){
  this.router.navigate(['home']);
}
}