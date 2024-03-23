import { Component, OnInit } from '@angular/core';
// import { Userinfo } from '../userinfo';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
// import { FormsModule } from '@angular/forms';
import { Userinfo } from '../userinfo';
@Component({
  selector: 'app-update-userinfo',
  templateUrl: './update-userinfo.component.html',
  styleUrls: ['./update-userinfo.component.css']
})
export class UpdateUserinfoComponent implements OnInit{
  id!:number
  userinfo: Userinfo= new Userinfo();
  constructor(private userinfoService: UserinfoService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userinfoService['getUserinfoById'](this.id).subscribe((data:Userinfo)=>
    {
      this.userinfo=data;
    },
    (error:any)=>console.log(error));
    
  }
  onSubmit()
  {
    this.userinfoService['updateUserinfo'](this.id,this.userinfo).subscribe((data:any)=>
    {
      this.goToUserinfoList();
    },
    (error:any)=>console.log(error));
    
  }
  goToUserinfoList()
  {
    this.router.navigate(['/userinfo']);
  }
  }