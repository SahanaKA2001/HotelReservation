import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userinfo } from './userinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private baseURL="http://localhost:8800/userInfo";

  constructor(private httpClient:HttpClient) {}
    
  getUserinfo():Observable<Userinfo[]>
  {
    return this.httpClient.get<Userinfo[]>(`${this.baseURL}`);
  }
  createUserinfo(user:Userinfo):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,user)
  }
  getUserinfoById(id:number):Observable<Userinfo>
  {
    return this.httpClient.get<Userinfo>(`${this.baseURL}/${id}`)
  }
  updateUserinfo(id:number,user:Userinfo):Observable<object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,user)
  }
  deleteUserinfoById(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
   }