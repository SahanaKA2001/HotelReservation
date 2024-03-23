import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../userinfo';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit{
  id!:number;
  userinfo!: Userinfo;
  constructor(private route:ActivatedRoute,
    private router: Router,
    private userinfoService: UserinfoService){}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userinfo=new Userinfo();
    this.userinfoService['getUserinfoById'](this.id).subscribe((data:Userinfo)=>
    {
      this.userinfo=data;
    }
    );  
  }
}