import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  dragText : String ="";
  constructor() { }

  ngOnInit() {
    this.dragText=""
  }

  ball = [
    "Abang Bola","Bang Ball","Mas Ball","Mbak Ball"
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ball, event.previousIndex, event.currentIndex);
  }


}
