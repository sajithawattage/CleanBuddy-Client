import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Equipment } from '../../../../model/equipment';
import { EquipmentService } from '../../../../services/equipment-service';



@Component({
  selector: 'app-equipment-manage',
  templateUrl: './equipment-manage.component.html',
  styleUrls: ['./equipment-manage.component.css']
})
export class EquipmentManageComponent implements OnInit {

  submitted: boolean = false;
  model: Equipment = null;

  constructor(protected equipmentService: EquipmentService) { }

  ngOnInit() {
    this.model = new Equipment();
    this.model.Code = '';
    this.model.Brand = '';
    this.model.Model = '';
    this.model.ID = 0;
    this.model.PurchasedFrom = '';
    this.model.PurchaseDate = new Date();
    this.model.WarrantyExpire = new Date();
  }

  onSubmit() {
    if (this.model != null) {
      //send data to database
      console.log('model', this.model);

      this.equipmentService.addNewEquipment(this.model).subscribe((data: any) => {
        alert("Saved Successfully");
      },
        (err: any) => {
          alert("Error Ooccured");
          console.log('err', err);
        }
      );
    }
  }


  get diagnostic() { return JSON.stringify(this.model); }

}
