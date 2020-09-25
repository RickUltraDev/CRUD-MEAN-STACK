import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees:Employee[];
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };
  
  constructor(public employeeService: EmployeeService) { }
  ngOnInit(): void {
    //it execute when component starts
    this.getEmployees();
  }

  public getEmployees(){
     
    this.employeeService.getEmployees().subscribe(
      res =>{
        //if the response its positive, do whatever things its written here
        this.employees = res['employees'];
        
      },
      err =>{
        //if you have any error, do whatever things its written here
        console.log(err);
      }
    );   
  }

  public addEmployee(form: NgForm){
    //form.value contains a new employee 
    this.employeeService.createEmployee(form.value).subscribe(
      res =>{
        //if the response its positive, do whatever things its written here
        //update employee array
        this.getEmployees();
        //clean form 
        form.reset();
      },
      err =>{
        //if you have any error, do whatever things its written here
        console.log(err);
      }
    ); 
    
  }

}
