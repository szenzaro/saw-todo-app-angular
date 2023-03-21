import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() todos: Todo[] | null = []

  get completed() {
    return this.todos!.filter(({state}) => state === 'done').length
  }
}
