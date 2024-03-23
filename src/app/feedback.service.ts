import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseURL="http://localhost:8800/feedback";
  constructor(private httpClient:HttpClient) { }
  createFeedback(user:Feedback):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,user)
  }
}