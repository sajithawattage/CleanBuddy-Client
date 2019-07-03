import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Equipment } from '../../../../model/equipment';
import { EquipmentService } from '../../../../services/equipment-service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit, OnDestroy {

  equipments: Equipment[];

  constructor(private formBbuilder: FormBuilder, private equipmentService: EquipmentService, 
    private router: Router) { }

  ngOnInit(): void {
    this.loadEquipmentGrid();
  }

  ngOnDestroy(): void {
  }

  //functions
  loadEquipmentGrid() {
    this.equipmentService.getEquipmentList().subscribe((result: any) => {
      this.equipments = result.Data;
    },
      (err: HttpErrorResponse) => {
        console.log('err', err);
      });
  }

  onRowEditInit(equipment : Equipment){
    this.router.navigate(['equipment/detail', equipment.ID]);
  }

}
