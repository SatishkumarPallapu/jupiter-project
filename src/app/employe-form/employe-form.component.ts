import { EmployeService } from './../../assets/Service/employe-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employe, EmployeeLearningData } from './../../assets/Model/employe';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2'

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent implements OnInit {

  employeForm: FormGroup
  employeId: number
  employeLearningData: EmployeeLearningData
  batches: string[] = ["Batch 1", "Batch 2", "Batch 3"]
  constructor(private route: Router, private router: ActivatedRoute, private service: EmployeService) { }




  ngOnInit() {

    this.employeId = +this.router.snapshot.params['id']

    this.employeForm = new FormGroup({
      'training_batch': new FormControl(null),
      'certification': new FormControl(null),
      'certification_two': new FormControl(null),
      'certification_three': new FormControl(null),
      'foundation_track': new FormControl(null),
      'score': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      'foundation_start_date': new FormControl(null),
      'foundation_end_date': new FormControl(null),
      'foundation_performance': new FormControl(null),
      'advance_training_start_date': new FormControl(null),
      // 'current_training': new FormControl(null),
      'advance_training_end_date': new FormControl(null),
      'alp_start_date': new FormControl(null),
      'alp_end_date': new FormControl(null),
      'training_completion_date': new FormControl(null),
      'l_and_d_comments': new FormControl(null),
    });


    this.employeLearningData = this.service.getEmployeLearningDataById(this.employeId)[0]
    this.employeForm.setValue({
      training_batch: this.employeLearningData.training_batch,
      certification: this.employeLearningData.certification,
      certification_two: this.employeLearningData.certification_two,
      certification_three: this.employeLearningData.certification_three,
      foundation_track: this.employeLearningData.foundation_track,
      score: this.employeLearningData.score,
      foundation_start_date: this.formatDate(this.employeLearningData.foundation_start_date),
      foundation_end_date: this.formatDate(this.employeLearningData.foundation_end_date),
      // foundation_performance: this.getPerformance(this.employeLearningData.score),
      advance_training_start_date: this.formatDate(this.employeLearningData.advance_training_start_date),
      advance_training_end_date: this.formatDate(this.employeLearningData.advance_training_end_date),
      alp_start_date: this.formatDate(this.employeLearningData.alp_start_date),
      alp_end_date: this.formatDate(this.employeLearningData.alp_end_date),
      training_completion_date: this.formatDate(this.employeLearningData.training_completion_date),
      l_and_d_comments: this.employeLearningData.l_and_d_comments,

    })

  }


  onSubmit() {
    this.service.updateLearningDataByID(this.employeForm.value, this.employeId).subscribe(
      (data: any) => {
        this.employeLearningData = data
      }
    )

    this.employeLearningData = this.employeForm.value

    swal.fire("OK", `Successfully Updated Employee with ID:${this.employeId}`, "success")
    this.route.navigate(['employe-list', this.employeId])
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  getPerformance(value: number) {
    return value >= 70 ? "Pass" : "Fail";
  }

}
