import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url = "http://192.168.2.118:8080/"
    
 
  toggleLed(color:string) {
    console.log(this.url+color+"/start")
    // this.http.post(this.url+color+"/start", );
    this.http.get(this.url+color+"/start", ).subscribe(config => {
      console.log('Updated config:', config);
    });
  }

  constructor(private http: HttpClient) {}
}
