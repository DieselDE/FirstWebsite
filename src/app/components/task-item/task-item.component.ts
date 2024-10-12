import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }
}
