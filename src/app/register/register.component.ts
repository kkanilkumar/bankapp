import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uname = '';
  accno = '';
  paswrd = '';

  //Form Group
  registerForm = this.fb.group({
    accno: '',
    paswrd: '',
    uname: '',
  });

  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  register() {
    var uname = this.uname;
    var accno = this.accno;
    var paswrd = this.paswrd;
    const result = this.ds.register(accno, uname, paswrd);
    if (result) {
      alert('Successfully Registered!!!');
      this.router.navigateByUrl('');
    } else {
      alert('Account Number Already Exists!!! Please Login');
    }
  }
}
