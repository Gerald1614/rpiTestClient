import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url = "http://192.168.2.118:8080/"
    
 getConfluentStock() {
  return this.http.get(this.url+"stock");
}
  toggleLed(color:string, action:string) {
    console.log(this.url+color+"/start")
    this.http.get(this.url+color+"/"+action, ).subscribe(result => {
      console.log(result);
    });
  }

  chenillard(duration:number) {
    return this.http.get(this.url+"chenille/"+duration)
  }

  constructor(private http: HttpClient) {}
}
