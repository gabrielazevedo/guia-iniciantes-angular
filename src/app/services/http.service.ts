import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api = 'https://style-guide-angular.firebaseio.com/conteudo.json';

  constructor(private httpClient: HttpClient) { }

  public getContent(){
    return new Promise((resolve) => {
      this.httpClient.get(`${this.api}`, {
        headers: new HttpHeaders(
          {
            "content-type": "application/json",
          }
        )
      }).subscribe((data) => {
        resolve(data);
      })
    })
  }

}
