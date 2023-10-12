import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
updateEmployee(id: number) {
      this.router.navigate(['/update-employee', id]);

}

  employees: Employee[];
  
  constructor(private employeeService : EmployeeService, private router : Router){}
  ngOnInit(): void {
    this.getEmployees();

  //   this.employees = [
  //     {
  //       id : 0,
  //       firstName : "Aruna",
  //       secondName : "Ardala",
  //       emailId : "aruna@gmail.com"
  //     }
  //   ]

  }

  private getEmployees()
  {
    console.log("Angular crd operation");
      this.employeeService.getEmployeesList().subscribe((data) => {this.employees=data
      });
  }

}
