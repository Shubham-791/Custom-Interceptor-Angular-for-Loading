import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public loaderService: LoaderService, private http: HttpClient) {

  }

  loadSomething() {
    this.http.get('https://www.mocky.io/v2/5ab2663b2e00003d044cc144?mocky-delay=1000ms')
      .subscribe(data => {
        console.log('Yo', data);
      });
  }
}
