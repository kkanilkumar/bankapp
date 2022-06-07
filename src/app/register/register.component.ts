import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    paswrd: [''],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });

  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  register() {
    var uname = this.registerForm.value.uname;
    var accno = this.registerForm.value.accno;
    var paswrd = this.registerForm.value.paswrd;
    if (this.registerForm.valid) {
      const result = this.ds.register(accno, uname, paswrd);
      if (result) {
        alert('Successfully Registered!!!');
        this.router.navigateByUrl('');
      } else {
        alert('Account Number Already Exists!!! Please Login');
      }
    } else {
      alert('Invalid Form');
    }
  }
}
