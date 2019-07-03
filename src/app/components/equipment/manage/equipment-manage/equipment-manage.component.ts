import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem, MessageService } from 'primeng/api';
import { EquipmentService } from '../../../../services/equipment-service';
import { Equipment } from '../../../../model/equipment';

@Component({
  selector: 'app-equipment-manage',
  templateUrl: './equipment-manage.component.html',
  styleUrls: ['./equipment-manage.component.css'],
  providers: [MessageService]
})
export class EquipmentManageComponent implements OnInit {

  equipmentForm: FormGroup;
  submitted: boolean = false;
  model: Equipment = new Equipment();
  categories: SelectItem[];

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, 
    protected equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentForm = this.formBuilder.group({
      'code': new FormControl('', Validators.required),
      'brand': new FormControl('', Validators.required),
      'equipmentModel': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'equipmentPurchesedFrom': new FormControl('', Validators.required),
      'purchasedDate': new FormControl('', Validators.required),
      'warrantyExpireDate': new FormControl('', Validators.required)
    });

    //get the categories and bind to the drop down list
    this.equipmentService.getEquipmentCategoryList().subscribe((data:any) => {
        var categoryList = data.Data;
        this.categories = categoryList.map(function(x: any){
          return {label:x.Name, value:x.ID};
        });
    });
  }

  onSubmit() {
    
    if (this.equipmentForm.value != null) {
       this.model.Brand = this.equipmentForm.value.brand;
       this.model.CategoryID = this.equipmentForm.value.category;       
       this.model.Code = this.equipmentForm.value.code;
       this.model.Model = this.equipmentForm.value.equipmentModel;
       this.model.PurchaseDate = this.equipmentForm.value.purchasedDate;
       this.model.PurchasedFrom = this.equipmentForm.value.equipmentPurchesedFrom;
       this.model.WarrantyExpire = this.equipmentForm.value.warrantyExpireDate;

      this.equipmentService.addNewEquipment(this.model).subscribe((data: any) => {
        this.submitted = true;
        
        this.equipmentForm = null;

        this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
      },
        (err: any) => {
          alert("Error Ooccured");
          console.log('err', err);
        }
      );
    }
  }

  get diagnostic() { return JSON.stringify(this.equipmentForm.value); }

}
