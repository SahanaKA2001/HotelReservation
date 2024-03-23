import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookroom } from './bookroom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookroomService {
  private bookRoombaseURL="http://localhost:8800/bookRoom";
  constructor(private httpClient:HttpClient) { }
   //bookRoom

   getBookRoomList():Observable<Bookroom[]>
   {
     return this.httpClient.get<Bookroom[]>(`${this.bookRoombaseURL}`);
   }
   createBookRoom(bookRoom:Bookroom):Observable<object>
   {
     return this.httpClient.post(`${this.bookRoombaseURL}`,bookRoom)
   }
   getBookRoomById(id:number):Observable<Bookroom>
   {
     return this.httpClient.get<Bookroom>(`${this.bookRoombaseURL}/${id}`)
   }
   updateBookRoom(id:number,bookRoom:Bookroom):Observable<object>
   {
     return this.httpClient.put(`${this.bookRoombaseURL}/${id}`,bookRoom)
   }
   deleteBookRoomById(id:number):Observable<Object>
     {
       return this.httpClient.delete(`${this.bookRoombaseURL}/${id}`);
     }
   
}