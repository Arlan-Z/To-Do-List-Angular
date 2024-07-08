import { Component } from '@angular/core';

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrl: './add-window.component.scss'
})
export class AddWindowComponent {
  isWindowVisible: boolean = false;
  buttonValue: string = "🠇"


  toggleWindow(){
    this.isWindowVisible = !this.isWindowVisible;
    this.buttonValue = !this.isWindowVisible ? "🠇" : "✓︎";
  }
}
