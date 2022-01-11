import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  Key = "dBNduxOTa1ErpHrrVhM-ZaIczPQVEDg9KUOrO6FCpNQ";

  getImage(searchKeyword : string) {
    return this.httpClient.get(
      `https://api.unsplash.com/search/photos?per_page=30&client_id=${this.Key}&query=`+searchKeyword
    );
  }


}

