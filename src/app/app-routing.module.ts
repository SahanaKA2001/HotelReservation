import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ListUserinfoComponent } from './list-userinfo/list-userinfo.component';
import { UpdateUserinfoComponent } from './update-userinfo/update-userinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateBookroomComponent } from './create-bookroom/create-bookroom.component';
import { UpdateBookroomComponent } from './update-bookroom/update-bookroom.component';
import { CreateroomComponent } from './create-room/create-room.component';
import { BookroomComponent } from './list-bookroom/list-bookroom.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'users',component:ListUserComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'user-details/:id',component:RoomDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'registration',component:RegistrationComponent},

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'user-header',component:UserHeaderComponent},

  {path:'userinfo',component:ListUserinfoComponent},
  {path:'update-userinfo/:id',component:UpdateUserinfoComponent},
  {path:'userinfo/:id',component:UserinfoComponent},

  {path:'room',component:RoomListComponent},
  {path:'create-room',component:CreateroomComponent},
  {path:'update-room/:id',component:UpdateRoomComponent},
  {path:'room-details/:id',component:RoomDetailsComponent},
  {path:'view-room',component:ViewRoomComponent},

  {path:'bookroom',component: BookroomComponent},
  {path:'create-bookroom',component:CreateBookroomComponent},
  {path:'update-bookroom/:id',component:UpdateBookroomComponent},
  {path:'list-bookroom/:id',component:BookroomComponent},
  
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'feedback',component:FeedbackComponent},

  {path:'admin-header',component:AdminHeaderComponent},
  {path:'create-user',component:CreateUserComponent},

   {path:'login',component:LoginComponent},
 
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }