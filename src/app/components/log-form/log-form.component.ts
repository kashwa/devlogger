import { LogService } from './../../services/log.service';
import { Log } from './../../models/Log';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  id: string;
  text: string;
  date: any;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // subscribe to the event (selected log observable). to put in the form.
    this.logService.selectedLog.subscribe(log => {
      //console.log(log) // initially it will log it with null values, (initial value).

      // if something is clicked.
      if (log.id != null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

}
