import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import { HttpServiceService } from '../http-service.service';
import { Stock } from '../stock';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  stockConfluent: Stock = {
    status: "",
    from: "",
    symbol: "",
    open: "",
    close:""
  };
  stockResult:any;
  constructor(private HttpServiceService: HttpServiceService) { }

  getStock() {
    this.HttpServiceService.getConfluentStock().subscribe(
      result => {
        this.stockResult=result;
        if (this.stockResult.status ="ok") {
          this.stockConfluent.status = this.stockResult.status;
          this.stockConfluent.from = this.stockResult.from;
          this.stockConfluent.symbol = this.stockResult.symbol;
          this.stockConfluent.open = this.stockResult.open;
          this.stockConfluent.close = this.stockResult.close;
          console.log(this.stockConfluent)
        }
        else {
          console.log("error")
        }
      }
    )

   
  
  }
}
