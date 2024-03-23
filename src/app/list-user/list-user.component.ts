import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  users!:User[];
  getUsers: any;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
      this.getUser();
  }
  private getUser()
  {
    this.userService.getUserList().subscribe(data=>
      {
        this.users=data;
      }
      );
  }
  userDetails(id:number)
  {
    this.router.navigate(['user-details',id]);
  }
  updateUser(id:number)
  {
    this.router.navigate(['update-user',id]);
  }
  deleteUser(id:number)
  {
    this.userService.deleteUserById(id).subscribe(data=>
      {
        console.log(data);
        this.getUsers
      }
      )
  }
}