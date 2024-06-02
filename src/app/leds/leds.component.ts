import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-leds',
  standalone: true,
  imports: [MatButtonToggleModule, MatButtonModule, MatSliderModule, MatInputModule, FormsModule, MatProgressSpinnerModule, NgIf],
  templateUrl: './leds.component.html',
  styleUrl: './leds.component.css'
})
export class LedsComponent {
  constructor(private HttpServiceService: HttpServiceService) { }
  slidervalue:number = 5;
  isEnabled:boolean = false;

  chenillard() {
    this.isEnabled = true;
    this.HttpServiceService.chenillard(this.slidervalue/10).subscribe({
      next: result=> {
      console.log( result);
      this.isEnabled= false;
      },
      error: errors=> {
        console.log(errors);
        this.isEnabled=false
      },
      complete: () => console.info('complete')
  });
  }
  onToggleGroupChange(source:any) {
    let action: string
    console.log(source.value, source.checked)
    source.checked? action="start" : action="stop"
    this.HttpServiceService.toggleLed(source.value, action)
    source.checked? (<HTMLSpanElement>document.getElementById(source.value+"Led")).style.opacity="1" : (<HTMLSpanElement>document.getElementById(source.value+"Led")).style.opacity="0.2"
  }
}
