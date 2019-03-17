import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../common/constant/app-constants";

@Injectable()
export class EquipmentService {
    constructor(protected http: HttpClient, protected constant: AppConstants) {

    }
    public getEquipmentList() {
        return this.http.get(this.constant.equipment);
    }
}
