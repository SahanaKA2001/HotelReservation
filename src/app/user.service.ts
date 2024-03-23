import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:8800/user";
  

  constructor(private httpClient:HttpClient) { }
  getUserList():Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user:User):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,user)
  }
  getUserById(id:number):Observable<User>
  {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`)
  }
  updateUser(id:number,user:User):Observable<object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,user)
  }
  deleteUserById(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
//RoomEntity
getRegisteredUsernames(): Observable<string[]> 
{ 
  return this.httpClient.get<string[]>(`${this.baseURL}/UserName`);
}
 

}