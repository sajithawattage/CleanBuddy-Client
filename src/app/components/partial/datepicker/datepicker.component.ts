import { Component,  OnChanges, SimpleChanges, Injectable, Output, } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

@Injectable()
export class DatepickerComponent implements OnChanges {
  
  date : Date;

  @Output()
  selected:Date;

  ngOnChanges(changes: SimpleChanges): void {
    this.selected = this.date;
  }

}
