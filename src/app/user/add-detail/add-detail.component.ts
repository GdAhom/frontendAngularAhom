import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
public addPersonalDetail!:FormGroup;

  constructor(public mainService:MainService) { }

  ngOnInit(): void {

    this.addPersonalDetail=new FormGroup({
        name:new FormControl('',Validators.required),
        company_name:new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        street:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        country:new FormControl('',Validators.required)
    })
  }

  onSubmit(){
      const apiURL =`api/v1/user/address/add`;

      const data ={
          name:this.addPersonalDetail.get('name')!.value,
          company_name:this.addPersonalDetail.get('company_name')!.value,
          email:this.addPersonalDetail.get('email')!.value,
          street:this.addPersonalDetail.get('street')!.value,
          city:this.addPersonalDetail.get('city')!.value,
          state:this.addPersonalDetail.get('state')!.value,
          country:this.addPersonalDetail.get('country')!.value
      }

      this.mainService.postApi(apiURL,data).subscribe((res:any)=>{
        if(res){
            console.log(res);
            swal.fire('Data Saved Successfully!');
          }
      })
  }

}
