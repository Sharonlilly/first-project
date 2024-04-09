import { Component,inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrl: './fantasy.component.css'
})
export class FantasyComponent implements OnInit{
  httpClient=inject(HttpClient)
  authors:any;
  userService=inject(UserService)

  ngOnInit(): void {

    this.authors = this.userService.data('http://localhost:3001/fantasy').subscribe(
      (res)=>{
        this.authors=res;
      console.log(this.authors.author);
      }
    )


    
  }

}
