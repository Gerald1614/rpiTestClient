import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LedsComponent } from './leds/leds.component';
import { StockComponent } from './stock/stock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LedsComponent, StockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rpiTestClient';
}
