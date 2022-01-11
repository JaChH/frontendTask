import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getImage(searchKeyword : string) {
    return this.httpClient.get(
      `https://api.unsplash.com/search/photos?per_page=30&client_id=${environment.unsplash_key}&query=`+searchKeyword
    );
  }


}

