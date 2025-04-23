import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      salary: 50000,
      dob: '1990-05-10',
      email: 'john.doe@example.com'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      salary: 60000,
      dob: '1988-11-22',
      email: 'jane.smith@example.com'
    }
  ];
  
}

