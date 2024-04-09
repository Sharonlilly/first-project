import { Component,OnInit,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrl: './fiction.component.css'
})
export class FictionComponent implements OnInit{

  httpClient=inject(HttpClient)
  userService = inject(UserService)
  authors:any;

  ngOnInit(): void {

    this.authors=this.userService.data('http://localhost:3001/fiction').subscribe(
      (res)=>{
      this.authors=res;
      console.log(this.authors.author);
    })


    
  }

}
