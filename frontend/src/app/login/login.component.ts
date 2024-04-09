import { Component,Inject,inject,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formGroup = Inject(FormGroup)

  router = inject(Router)
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
  }

  login() {
    this.router.navigate(['user-profile'])
  }

}
