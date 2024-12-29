import { UploadFileComponent } from './upload-file/upload-file.component';
import { EmployeFormComponent } from './employe-form/employe-form.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employe-list', component: EmployeListComponent },
  { path: 'employe-list/:id', component: EditEmployeComponent },
  { path: 'employe-list/:id/edit', component: EmployeFormComponent },
  { path: 'new-employe', component: UploadFileComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
