import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_service/authenticationService';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    error = false;
    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService : AuthenticationService
       
    ) { 
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({

            username: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
    
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe( data =>
         {
             console.log(data)
            if(data)
            {
                console.log("Data"+ data);
                localStorage.setItem('token', data.token)
                // console.log("Token Set in ts login")
                localStorage.setItem('name',this.f.username.value)
                this.router.navigate(['/sidebar'])
            }

            else 
            console.log("Found rsror");

        },
        err=> {
            this.error = true
            console.log("Error ispreseent")
        });


        
       
    }
}
