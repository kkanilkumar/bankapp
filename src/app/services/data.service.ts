import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 5000 },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 15000 },
    1002: { acno: 1002, username: 'Neer', password: 1002, balance: 10000 },
  };

  constructor() {}
  login(acno: any, pswd: any) {
    let db = this.db;
    if (acno in db) {
      if (pswd == db[acno]['password']) {
        return true;
      } else {
        alert('Incorrect Password!!');
        return false;
      }
    } else {
      alert('User Doesnot Exist!!!');
      return false;
    }
  }

  // Registration Details

  register(acno: any, username: any, password: any) {
    let db = this.db;
    if (acno in db) {
      return false;
    } else {
      // insert in db
      db[acno] = {
        acno,
        username,
        password,
        balance: 0,
      };
      console.log(db);
      return true;
    }
  }

  deposit(acno: any, password: any, amt: any) {
    let db = this.db;
    var amount = parseInt(amt);
    if (acno in db) {
      if (password == db[acno]['password']) {
        db[acno]['balance'] += amount;
        return db[acno]['balance'];
      } else {
        alert('Incorrect Password!!!');
        return false;
      }
    } else {
      alert('Usere Dosenot Exists!!!!');
      return false;
    }
  }

  withdraw(acno: any, password: any, amt: any) {
    let db = this.db;
    var amount = parseInt(amt);
    if (acno in db) {
      if (password == db[acno]['password']) {
        if (amount < db[acno]['balance']) {
          db[acno]['balance'] -= amount;
          return db[acno]['balance'];
        } else {
          alert('Insufficient Balance');
          return false;
        }
      } else {
        alert('Incorrect Password!!!');
        return false;
      }
    } else {
      alert('User Dosenot Exists!!!!');
      return false;
    }
  }
}
