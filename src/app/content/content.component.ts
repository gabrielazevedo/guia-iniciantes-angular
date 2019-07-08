import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  content: any;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getContent().then(data => {
      this.content = data;
      console.log(this.content);
    });
  }

}
