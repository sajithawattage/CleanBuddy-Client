import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../../../services/equipment-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
  model: Equipment;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, protected equipmentService: EquipmentService) { }

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
  }

  onSubmit() {
    this.model = this.equipmentForm.value;
    if (this.model != null) {
      //send data to database
      console.log('model', this.model);

      this.equipmentService.addNewEquipment(this.model).subscribe((data: any) => {
        this.submitted = true;
        this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
      },
        (err: any) => {
          alert("Error Ooccured");
          console.log('err', err);
        }
      );
    }
  }


  //get diagnostic() { return JSON.stringify(this.model); }

}
