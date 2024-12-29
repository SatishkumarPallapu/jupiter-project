import { EmployeService } from './../../assets/Service/employe-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx/xlsx.mjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  excelData: any
  count: number = 0
  constructor(private http: HttpClient, private service: EmployeService) { }

  ngOnInit(): void {
    console.log()
  }

  onUpload(event) {

    let file = event.target.files[0];

    let fileReader = new FileReader()

    fileReader.readAsBinaryString(file);

    fileReader.onload = () => {

      var workBook = XLSX.read(fileReader.result, { type: 'binary' });

      var sheetName = workBook.SheetNames;

      this.excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName[0]])

      console.log(this.excelData, "nennee")

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        'My-Custom-Header': 'foobar'
      }

      for (let employe of this.excelData) {
        // this.http.post(`http://localhost:4000/new-employe.json`, employe)
        // console.log("uploaded", employe)
        this.service.createNewEmployeUsingPost(employe).subscribe(data => {
          this.count = this.count + 1
          console.log(this.count)

        })
      }
    }

  }

}
