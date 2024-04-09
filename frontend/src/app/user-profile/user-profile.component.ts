import { Component,inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  httpClient=inject(HttpClient)
  authorsselfhelp:any;
  authorsfantasy:any;
  userService=inject(UserService)
  
  ngOnInit(): void {

  
  
    // this.authorsselfhelp=this.userService.data('http://localhost:3001/selfHelp').subscribe(
    //   (res)=>{
    //   this.authorsselfhelp=res;
    //   console.log(this.authorsselfhelp.author);
    // })
  


    // this.authorsfantasy=this.userService.data('http://localhost:3001/fantasy').subscribe(
    //   (res)=>{
    //   this.authorsfantasy=res;
    //   console.log(this.authorsfantasy.author)
    // })



  
  
    
    
    // this.authors=this.userService.selfHelp('http://localhost:3001/fantasy').subscribe(
    //   (res)=>{
    //   this.authors=res;
    //   console.log(this.authors.author)
    // })
  
    
    
  }

  

  


}
