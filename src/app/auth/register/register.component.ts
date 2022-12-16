import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "src/app/provider/main.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
})

export class RegisterComponent implements OnInit{

    public registerForm!:FormGroup;


    returnUrl:any;
    email:string='';
    username:string='';
    password:string='';
    isSubmitting:boolean=false;
    error:string='';


    constructor(private router:Router,
        private route:ActivatedRoute,
        public mainService:MainService
        ){

    }

    ngOnInit(): void {
            // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.registerForm = new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
          });
    }

    onRegister(e:any){
        e.preventDefault();

       

        localStorage.setItem('isLoggedin','true');
        if(localStorage.getItem('isLoggedin')){
            this.router.navigate(['/']);
        }
    }

    
}