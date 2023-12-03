// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startX: number = 0;
  endX: number = 0;
  startY: number = 0;
  endY: number = 0;
  stepX: number = 1;
  stepY: number = 1;
  radius: number = 10;
  results: Array<{y: string, results: Array<{isInside: boolean}>}> = [];
  xCoordinates: string[] = [];

  submitForm(): void {
    this.results = [];
    this.xCoordinates = [];
    if(this.startX > this.endX || this.startY > this.endY || this.stepX <= 0 || this.stepY <= 0 || this.radius <= 0){
      alert("Input values are not valid.");
      return;
    }
    for(let x = this.startX; x <= this.endX; x += this.stepX){
      this.xCoordinates.push(x.toFixed(1));
    }
    for(let y = this.endY; y >= this.startY; y -= this.stepY){
      let row = [];
      for(let x = this.startX; x <= this.endX; x += this.stepX){
        let isInside = this.checkIfInside(x, y, this.radius);
        row.push({isInside: isInside});
      }
      this.results.push({y: y.toFixed(1), results: row});
    }
  }

  checkIfInside(x: number, y: number, R: number): boolean {
    if(x >= 0 && y >= 0){
      let distance = Math.sqrt(x*x + y*y);
      return distance <= R;
    } else if(x <= 0 && y >= 0){
      return y-1/2*(x+5)<=0;
    } else if(x >= 0 && y <= 0){
      return x <= R/2 && y >= -R;
    } else {
      return false;
    }
  }
}