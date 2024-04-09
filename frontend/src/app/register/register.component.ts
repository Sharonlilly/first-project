import { Component,OnInit,inject,Inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  
  formGroup:any = Inject(FormGroup);
  httpClient = inject(HttpClient);
  router = inject(Router);
  url:string='http://localhost:3000/users';

registerForm:any;

  ngOnInit(): void {

    this.registerForm=new FormGroup({
      name:new FormControl(''),
      mobile:new FormControl(''),
      dob:new FormControl(''),
      username:new FormControl(''),
      password:new FormControl('')
    })
  }

  register() {

    this.httpClient.post<any>(this.url,this.formGroup.value).subscribe(
      (res:any)=>{
      console.log(res)

      alert("Registration is Successful");
      this.formGroup.reset()
      this.router.navigate(['/login'])
    },

    (err:any)=>{
      console.log(err)
      alert("something went wrong");

    })
    
  }

}
