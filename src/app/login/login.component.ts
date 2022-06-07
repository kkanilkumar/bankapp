import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner" // String Interpolation
  user = "Username Please"  //Property Binding
  accno=""
  paswrd = ""


  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
  // USERDEFINED FUNCTION

  acnoChange(event:any){
    this.accno=event.target.value
    console.log(this.accno); 
  }

  pswdChange(event:any){
    this.paswrd=event.target.value
    console.log(this.paswrd);
    
  }

  login(){
    var accno = this.accno          //this means call by reference
    var pswd = this.paswrd
   
    const result = this.ds.login(accno,pswd)
    if(result){
        alert("Login Successful")
        this.router.navigateByUrl('dashboard')
      }
      
  }

  // login(acunt:any,pswrd:any){
  //   var accno = acunt.value          
  //   var pswd = pswrd.value
  //   let db = this.db

  //   if(accno in db){
  //     if(pswd==db[accno]["password"]){
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password!!")
  //     }
  //   }
  //   else{
  //     alert("User Doesnot Exist!!!")
  //   }
  // }
}
