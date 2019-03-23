import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../common/constant/app-constants";
import { Equipment } from "../model/equipment";

@Injectable()
export class EquipmentService {
    constructor(protected http: HttpClient, protected constant: AppConstants) {

    }
    public getEquipmentList() {
        return this.http.get(this.constant.equipment);
    }

    public addNewEquipment(dataObject: Equipment){
        return this.http.post(this.constant.equipment, dataObject);
    }
}
