import { Injectable } from '@angular/core';
import { of, from, merge } from 'rxjs';
import { map, debounceTime, flatMap, mergeAll } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  private userDetail = {
    _id: '1',
    name: 'Asaad',
    balance: '1340',
    expenses: '160',
    lastpayment: '20 June 2017',
    chart: [
      { category: 'Services', percentage: '301' },
      { category: 'Healthcare', percentage: '30' },
      { category: 'Restaurants', percentage: '40' },
    ],
  };

  private userTransaction = [
    {
      _id: '1',
      data: '17 july 2017',
      description: 'Google Storage',
      catagory: 'Services',
      amount: '50',
      status: 'pending',
    },
    {
      _id: '2',
      data: '17 july 2017',
      description: 'Icloud Storage',
      catagory: 'Services',
      amount: '50',
      status: 'pending',
    },
    {
      _id: '3',
      data: '15 july 2017',
      description: 'amazon',
      catagory: 'shopping',
      amount: '100',
      status: 'approved',
    },
    {
      _id: '4',
      data: '15 july 2017',
      description: 'something',
      catagory: 'shopping',
      amount: '100',
      status: 'approved',
    },
  ];
  constructor(private http: HttpClient) {}

  getUserDetail() {
    // return this.http.get('api.....');
    return of(this.userDetail);
  }

  getTransaction() {
    // // return this.http.get('api/recent')
    // let approved = this.userTransaction.filter(
    //   (item) => item.status == 'approved'
    // );
    // let pending = this.userTransaction.filter(
    //   (item) => item.status == 'pending'
    // );
    let result = { approved: [], pending: [] };
    return of(this.userTransaction).pipe(
      map((res) => {
        res.map((data) => {
          if (data.status == 'approved') {
            result.approved.push(data);
          } else {
            result.pending.push(data);
          }
        });
        return result;
      })
    );
  }

  transactionDetail(id) {
    // return this.http.get('api/recent/${id}')

    return of(this.userTransaction[id - 1]);
  }

  checkAccountNum(accnum) {
    //return http.get('api/accountnumb/accnum')

    return of({ valid: true });
  }
}
