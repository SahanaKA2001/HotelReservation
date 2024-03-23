import { Component } from '@angular/core';
import { Bookroom } from '../bookroom';
import { BookroomService } from '../bookroom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bookroom',
  templateUrl: './update-bookroom.component.html',
  styleUrls: ['./update-bookroom.component.css']
})
export class UpdateBookroomComponent {
  id!:number
  room: Bookroom= new Bookroom();
  constructor(private bookroomService: BookroomService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bookroomService['getBookRoomById'](this.id).subscribe((data:Bookroom)=>
    {
      this.room=data;
    },
    (error:any)=>console.log(error));
    
  }
  onSubmit()
  {
    this.bookroomService['updateBookRoom'](this.id,this.room).subscribe((data:any)=>
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