import { Component,inject,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrl: './horror.component.css'
})
export class HorrorComponent implements OnInit{
  httpClient=inject (HttpClient)
  userService=inject(UserService)
  authors:any;

  ngOnInit(): void {
    this.authors=this.userService.data('http://localhost:3001/horror').subscribe(
      (res)=>{
      this.authors=res;
      console.log(this.authors.author);
    })
    
  }

}
