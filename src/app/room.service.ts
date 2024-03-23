import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private RoombaseURL="http://localhost:8800/room";
  constructor(private httpClient:HttpClient) { }
  getRoom():Observable<Room[]>
  {
    return this.httpClient.get<Room[]>(`${this.RoombaseURL}`);
  }
  createRoom(room:Room):Observable<object>
  {
    return this.httpClient.post(`${this.RoombaseURL}`,room)
  }
  getRoomById(id:number):Observable<Room>
  {
    return this.httpClient.get<Room>(`${this.RoombaseURL}/${id}`)
  }
  updateRoom(id:number,room:Room):Observable<object>
  {
    return this.httpClient.put(`${this.RoombaseURL}/${id}`,room)
  }
  deleteRoomById(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.RoombaseURL}/${id}`);
  }

}