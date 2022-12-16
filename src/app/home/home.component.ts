import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MainService } from '../provider/main.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,public mainService:MainService) { }

  ngOnInit(): void {
  }

  Logout(){
    if(this.mainService.isLoggedIn()){
      localStorage.removeItem('leadsgator-token');
      this.router.navigate(['/auth/login'])
    }
  }

}
