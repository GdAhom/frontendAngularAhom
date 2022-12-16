import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from  '@angular/router';
import {MainService} from '../../provider/main.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {


  public loginForm!: FormGroup;

    returnUrl:any;
    email:string='';
    password:string='';
    isSubmitting:boolean=false;
    error:string='';

    constructor(private router:Router, 
    private route:ActivatedRoute,
    public mainService:MainService){}

    ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  
    }

    
    public onSubmit(){
      const apiURL = `api/v1/auth/login`;

      const data={
        email:this.loginForm.get('username')!.value,
        password:this.loginForm.get('password')!.value
      }

      this.mainService.postApi(apiURL,data).subscribe((res:any)=>{
        if(res && res.data && res.data.token){
          localStorage.setItem('leadsgator-token', res.data.token);
          localStorage.setItem('ahom-user', JSON.stringify(res.data));
          this.router.navigate([this.returnUrl]);
        }
      })
    }


}
