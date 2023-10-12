import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee : Employee = new Employee();
  id : number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

  }

  constructor(private employeeService : EmployeeService, private router : Router, private route : ActivatedRoute){}
  saveEmployee()
  {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.gotoEmployeeList();
    }
    , error => console.log(error));
  }



  gotoEmployeeList()
  {
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
