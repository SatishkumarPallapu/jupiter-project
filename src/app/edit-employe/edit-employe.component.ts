import { EmployeService } from './../../assets/Service/employe-service.service';
import { Employe, EmployeeLearningData } from './../../assets/Model/employe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {

  id: number
  employeLearningData: EmployeeLearningData
  employeData: Employe
  color: string
  empName: string
  empId: number
  email: string
  constructor(private route: ActivatedRoute, private service: EmployeService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']
    // this.service.getEmployeLearningDataById(this.id).subscribe(data => {
    //   this.employeLearningData = data[0]
    //   this.color = this.employeLearningData.score >= 70 ? "green" : "red";
    // })
    this.employeLearningData = this.service.getEmployeLearningDataById(this.id)[0]
    // this.color = this.employeLearningData.score >= 70 ? "green" : "red";
    // this.service.getEmployesById(this.id).subscribe((data: Employe[]) => {
    //   this.employeData = data.filter(each => Number(each.emp_id) === this.id)[0]
    // })

    this.service.getEmployeCardDetails(this.id).subscribe((data) => {
      this.employeData = data.filter((each: any) => each.emp_id === this.id)[0]
      this.empName = this.employeData.emp_name
      this.empId = +this.employeData.emp_id
      this.email = this.employeData.email
    })
  }

}
