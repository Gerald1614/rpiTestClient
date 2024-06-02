import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LedsComponent } from './leds/leds.component';
import { StockComponent } from './stock/stock.component';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LedsComponent, StockComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rpiTestClient';
}
