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

  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // subscribe to the event (selected log observable). to put in the form.
    this.logService.selectedLog.subscribe(log => {
      //console.log(log) # initially it will log it with null values, (initial value).

      // if something is clicked.
      if (log.id != null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });

  }

  onSubmit() {
    // check if new log
    if (this.isNew) {
      const newLog = {
        id: this.generateID(),
        text: this.text,
        date: new Date()
      }
      // Add log
      this.logService.addLog(newLog);
    } else {
      // TODO: update log.
    }
  }

  // create UUID for us
  generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
