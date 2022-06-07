import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  accno = '';
  paswrd = '';
  amount = '';

  accno1 = '';
  paswrd1 = '';
  amount1 = '';

  constructor(private ds: DataService) {}

  ngOnInit(): void {}
  deposit() {
    var acno = this.accno;
    var pswd = this.paswrd;
    var amt = this.amount;
    const result = this.ds.deposit(acno, pswd, amt);
    if (result) {
      alert(
        amt + ' has been deposited to your account. Current Balance: ' + result
      );
    }
  }

  withdraw() {
    var accno1 = this.accno1;
    var paswrd1 = this.paswrd1;
    var amount1 = this.amount1;
    const result = this.ds.withdraw(accno1, paswrd1, amount1);
    if (result) {
      alert(
        amount1 +
          ' has been debited from your account. Current Balance: ' +
          result
      );
    }
  }
}
