import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GetLogDataService {

  constructor(private http: HttpClient) { }

  public getLogJSON(): Observable<any> {
    return this.http.get("./assets/logs.ts");
  }
}
