
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstants } from "../../common/constant/app-constants";

@Injectable()
export class AuthService {
    public constructor(protected http: HttpClient, protected constant : AppConstants) {
    }

    public userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
        return this.http.post(this.constant.serverWithApiUrl + '/token', data, { headers: reqHeader });
    }
}