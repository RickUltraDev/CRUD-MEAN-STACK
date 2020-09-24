import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  public getEmployees(){
      return this.http.get('http://localhost:3000/api/employee');
  }


}
