import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //apiURL contains http://localhost:3000/api
  apiURL = environment.apiURL;
 

  constructor(private http: HttpClient) { }
  
  public getEmployees(){
      return this.http.get<Employee[]>(this.apiURL+'/employee');
  }
  
  public createEmployee(employee: Employee){
    return this.http.post(this.apiURL+'/employee', employee);
  }



}
