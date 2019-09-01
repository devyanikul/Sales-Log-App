import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetLogDataService {
  baseUrl: string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getLogJSON(): Observable<any> {
    return this.http.get(this.baseUrl + "logs");
  }

  postLog(body): Observable<any> {
    return this.http.post(this.baseUrl + "logs", body);
  }
}
