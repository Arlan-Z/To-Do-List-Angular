import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrl: './add-window.component.scss'
})
export class AddWindowComponent {
  isWindowVisible: boolean = false;
  buttonValue: string = "🠇";
  taskTitle: string = "";

  @Input() column: any;


  toggleWindow() {
    if (this.isWindowVisible && this.taskTitle != "") {
      this.column.addTask(this.taskTitle);
      this.taskTitle = "";
    }
    
    this.isWindowVisible = !this.isWindowVisible;
    this.buttonValue = this.isWindowVisible ? "✓︎" : "🠇";
  }
}
