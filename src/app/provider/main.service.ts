import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import { environment} from '../../environments/environment';
@Injectable({
    providedIn:'root'
})

export class MainService{
    baseUrl = environment.apiURL;


    constructor(public httpClient: HttpClient, private router:Router){

    }

    //---get API--//
    getApi(endPointURL:any):Observable<any>{
        let headers:any={
            'Content-Type':'application/json'
        }

        const httpHeaders ={
            headers:new HttpHeaders(headers)
        }
        
        return this.httpClient.get(this.baseUrl+endPointURL,httpHeaders)
    }


    postApi(endPointURL:any,data:any):Observable<any>{
        let headers:any={
            'Content-Type':'application/json'
        }

        if(localStorage.getItem('leadsgator-token')){
            headers={
                ...headers,
                ['leadsgator-token']:localStorage.getItem('leadsgator-token')
            }
        }
        const httpHeaders ={
            headers:new HttpHeaders(headers)
        }
            return this.httpClient.post(this.baseUrl + endPointURL,data,httpHeaders)
        
    }


    // ---toast service ---//


    successToast(msg:any){
        alert(msg);
        console.log('Success',msg);
    }


  errorToast(msg:any) {
    alert(msg);
    console.log('Error', msg);
  }

  warningToast(msg:any) {
    alert(msg);
    console.log('Warning', msg);
  }

  infoToast(msg:any) {
    alert(msg);
    console.log('Info', msg);
  }

  showSpinner() {
    document.getElementById('app-spinner')?.classList.remove('d-none');
    document.getElementById('main-wrapper')?.classList.add('has-spinner');
  }
  hideSpinner() {
    document.getElementById('app-spinner')?.classList.add('d-none');
    document.getElementById('main-wrapper')?.classList.remove('has-spinner');
  }


  // check login or not
  public isLoggedIn() {
    return localStorage.getItem('leadsgator-token') !== null;
  }


}