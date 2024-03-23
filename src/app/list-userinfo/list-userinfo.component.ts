import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../userinfo';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-list-userinfo',
  templateUrl: './list-userinfo.component.html',
  styleUrls: ['./list-userinfo.component.css']
})

export class ListUserinfoComponent implements OnInit{
  userinfos!:Userinfo[];
  // getUsersinfo: any;
  constructor(private userService:UserinfoService,private router:Router){}
  ngOnInit(): void {
      this.getUserinfo();
  }
  private getUserinfo()
  {
    this.userService.getUserinfo().subscribe(data=>
      {
        this.userinfos=data;
      }
      );
  }
  userinfo(id:number)
  {
    this.router.navigate(['userinfo',id]);
  }
  updateUserinfo(id:number)
  {
    this.router.navigate(['update-userinfo',id]);
  }
  deleteUserinfo(id:number)
  {
    this.userService.deleteUserinfoById(id).subscribe(data=>
      {
        console.log(data);
        this.userinfos;
      }
      )
  }
}