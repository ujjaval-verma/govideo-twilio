import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'govideo-twilio';
  messages$;
  constructor(private http: HttpClient) {
  }

  post() {
    this.http.post<any>('http://localhost:4201/users', {name: 'Ujjaval', cred:'Developer'})
    .subscribe(next => console.log(next));
  }

  get() {
    this.messages$ = this.http.get<any[]>('http://localhost:4201', {observe: 'response', responseType: 'json'});
    /*this.http.get<any[]>('http://localhost:4201').subscribe(res => {
      console.log(res);
      this.messages$ = res;
    });*/
  }
}
