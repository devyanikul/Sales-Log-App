import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetLogDataService {

  constructor(private http: HttpClient) { }

  getLogJSON(): Observable<any> {
    return this.http.get("./assets/logs.json");
  }

  postLog(body): Observable<any> {
    return this.http.post('/appendLog', body);
  }
}
