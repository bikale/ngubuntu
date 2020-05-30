import { Injectable } from '@angular/core';
import { Observable, observable, of, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CanActivate } from '@angular/router';

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

  getUserDetail(): Observable<any> {
    return of(this.userDetail); // fetch from backend
  }

  getRecentTransactions(): Observable<any> {
    return of(this.userTransaction);
  }
}
