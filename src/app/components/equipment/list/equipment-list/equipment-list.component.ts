import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Equipment } from '../../../../model/equipment';
import { EquipmentService } from '../../../../services/equipment-service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  equipments: Equipment[];

  constructor(private equipmentService: EquipmentService, private router: Router) { }

  //interface methods
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10
    };

    this.loadEquipmentGrid();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  //functions
  loadEquipmentGrid() {
    this.equipmentService.getEquipmentList().subscribe((result: any) => {
      this.equipments = result.Data;
      this.dtTrigger.next();
    },
      (err: HttpErrorResponse) => {
        console.log('err', err);
      });
  }

}
