import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-leds',
  standalone: true,
  imports: [],
  templateUrl: './leds.component.html',
  styleUrl: './leds.component.css'
})
export class LedsComponent {
  constructor(private HttpServiceService: HttpServiceService) { }

  toggle(color:string) {
    this.HttpServiceService.toggleLed(color)
  }
}
