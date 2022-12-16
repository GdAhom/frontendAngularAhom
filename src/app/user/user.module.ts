import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'add-detail',
        pathMatch:'full'
      },
      {
        path:'add-detail',
        component:AddDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AddDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class UserModule { }
