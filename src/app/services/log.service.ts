import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'generated log component',
        date: new Date('12/26/2018 12:55:23')
      },
      {
        id: '2',
        text: 'Randomly generated',
        date: new Date('11/07/2013 02:55:23')
      },
      {
        id: '3',
        text: 'Added boots',
        date: new Date('04/05/2019 10:14:23')
      }
    ]
  }

  getLogs() {
    return this.logs;
  }
}
