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

  getEmployees(){
     
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

  addEmployee(form: NgForm){

    if(form.value._id){
      //form.value contains a new employee 
    this.employeeService.putEmployee(form.value).subscribe(
      res =>{
        //if the response its positive, do whatever things its written here
        //clean form 
        form.reset();
        //update employee array
        this.getEmployees();
      },
      err =>{
        //if you have any error, do whatever things its written here
        console.log(err);
      }
    ); 

    }else{
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

  deleteEmployee(id: string){
    
    if (confirm('Are you sure you want delete it?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        res =>{
          //if the response its positive, do whatever things its written here
          console.log(res);
          this.getEmployees();
        },
        err =>{
          //if you have any error, do whatever things its written here
          console.log(err);
        }
      );
    }
  }

  editEmployee(employeeRed: Employee){
    this.selectedEmployee = employeeRed;
  }

  resetForm(form: NgForm){
    form.reset();
  }

}
