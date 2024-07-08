import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit, OnDestroy {
  board: Board = new Board('Test', [
    new Column('Ideas', [
    ]),
    new Column('Research', [
    ]),
    new Column('ToDo', [
    ]),
    new Column('Done', [
    ])
  ]);

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.saveData();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.container.data.length >= 3) return;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.saveData();
  }

  deleteTask(task: any, column: Column) {
    column.deleteTask(task);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('board', JSON.stringify(this.board));
  }

  loadData() {
    const savedBoard = localStorage.getItem('board');
    if (savedBoard) {
      this.board = JSON.parse(savedBoard);
    }
  }
}