import { Component,inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-self-help',
  templateUrl: './self-help.component.html',
  styleUrl: './self-help.component.css'
})
export class SelfHelpComponent implements OnInit{

  httpClient=inject(HttpClient)
  authors:any;
  userService=inject(UserService)

  ngOnInit(): void {

      this.authors=this.userService.data('http://localhost:3001/selfHelp').subscribe(
      (res)=>{
      this.authors=res;
      console.log(this.authors.author);
    })
    
  }

}
