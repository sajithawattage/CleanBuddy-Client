
export class AppConstants {
    public server = 'http://localhost/';
    public apiUrl = 'Cleaner.API/';
    public serverWithApiUrl = this.server + this.apiUrl;

    public auth = this.serverWithApiUrl + 'equipment/token';
    public equipment = this.serverWithApiUrl + 'equipment/items';
    public user = this.serverWithApiUrl + 'user/items';
}
