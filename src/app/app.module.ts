import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateBookroomComponent } from './create-bookroom/create-bookroom.component';
import { CreateroomComponent } from './create-room/create-room.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { BookroomComponent } from './list-bookroom/list-bookroom.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListUserinfoComponent } from './list-userinfo/list-userinfo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateBookroomComponent } from './update-bookroom/update-bookroom.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { UpdateUserinfoComponent } from './update-userinfo/update-userinfo.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ViewRoomComponent } from './view-room/view-room.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdminHeaderComponent,
    ContactusComponent,
    CreateBookroomComponent,
    CreateroomComponent,
    CreateUserComponent,
    FeedbackComponent,
    HomeComponent,
    BookroomComponent,
    ListUserComponent,
    ListUserinfoComponent,
    LoginComponent,
    RegistrationComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateBookroomComponent,
    UpdateRoomComponent,
    UpdateUserinfoComponent,
    UserHeaderComponent,
    UserLoginComponent,
    UserinfoComponent,
    ViewRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
