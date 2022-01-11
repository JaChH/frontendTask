import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(private apiService: ApiService) { }
  public data = [];
  public searchKeyword = '';
  searchImage() {
    this.apiService.getImage(this.searchKeyword).subscribe((res: any) => {
      console.log(res)
      this.data = res['results'];
      console.log(this.searchKeyword)
    });
  }

}
