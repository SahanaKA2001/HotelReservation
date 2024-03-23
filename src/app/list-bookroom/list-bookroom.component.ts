import { Component, OnInit } from '@angular/core';
import { Bookroom } from '../bookroom';
import { Router } from '@angular/router';
import { BookroomService } from '../bookroom.service';

@Component({
  selector: 'app-list-bookroom',
  templateUrl: './list-bookroom.component.html',
  styleUrls: ['./list-bookroom.component.css']
})
export class BookroomComponent implements OnInit{
  bookroom!:Bookroom[];
  bookRoom: any;
  id: any;
  route: any;
room: any;
  constructor(private bookroomService:BookroomService,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bookRoom=new Bookroom();
    this.bookroomService['getBookRoomById'](this.id).subscribe((data:Bookroom)=>
    {
      this.bookRoom=data;
    }
    );
      this.getbookRoom();
  }
  private getbookRoom()
  {
    this.bookroomService.getBookRoomList().subscribe(data=>
      {
        this.bookroom=data;
      }
      );
  }
 BookRooms(roomId:number)
  {
    this.router.navigate(['bookroom',roomId]);
  }
  updateBookRooms(roomId:number)
  {
    this.router.navigate(['update-bookRoom',roomId]);
  }
  deleteBookRooms(roomId:number)
  {
    this.bookroomService.deleteBookRoomById(roomId).subscribe(data=>
      {
        console.log(data);
        this.getbookRoom
      }
      )
  }

 }