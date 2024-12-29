import { EmployeService } from './../../assets/Service/employe-service.service';
import { Employe } from './../../assets/Model/employe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
  providers: [EmployeService]
})
export class EmployeListComponent implements OnInit {

  employeData: Employe[] = []
  employee: string
  isVisble: boolean = false
  constructor(private service: EmployeService, private router: Router) { }

  ngOnInit() {
    this.isVisble = true
    this.service.getEmployes().subscribe(resData => {
      this.employeData = resData
      console.log(resData)
    })

  }

  editEmployee(id: number) {
    this.router.navigate(['/employe-list', id])
  }

}
