
export class AppConstants {
    public server = 'http://localhost/';
    public apiUrl = 'Cleaner.API/v1/';
    public serverWithApiUrl = this.server + this.apiUrl;

    public auth = this.serverWithApiUrl + 'equipment/token';
    public equipment = this.serverWithApiUrl + 'equipment/items';
    public equipmentCategory = this.serverWithApiUrl + 'equipcategory/items'
    public user = this.serverWithApiUrl + 'user/items';
}
