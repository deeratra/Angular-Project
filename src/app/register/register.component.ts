import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../_service/registrationService';
// import { match } from 'minimatch';
import { MustMatch } from '../_helpers/must-match.validators';
import { Register} from './registerModel';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  submitted = false;



  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private registrationService : RegistrationService,
   // private register: Register
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      name: ['', Validators.required],
      username:['',[ Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword : ['', Validators.required]

  }, {
    validator: MustMatch('password','confirmpassword')
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    console.log("registr form");

    this.submitted = true;

       // this.register.name = name;
        
        // stop here if form is invalid
        if (this.registerForm.invalid) {
           // console.log("He")

           return;
        }
        

        let register:Register = new Register(
        
           this.f.name.value,
          this.f.username.value,
           this.f.password.value
        );
        this.registrationService.register(register).subscribe(data => {
          if(!data)
                console.log("Authenticate");

            else
                console.log("Done");
                this.router.navigate(['/']);

        })

  }
}



export interface IRegister{
    name: string;
    username:string;
    password : string;
}