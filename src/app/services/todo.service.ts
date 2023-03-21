import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Todo {
  id: string;
  state: 'done' | 'ongoing';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = new BehaviorSubject<Todo[]>([
    { id: '1', text: 'git add .', state: 'done' },
    { id: '2', text: 'git commit', state: 'done' },
    { id: '3', text: 'git push', state: 'ongoing' },
    { id: '4', text: 'escape building', state: 'ongoing' },
  ]);

  addTodo(text: string) {
    const t: Todo = {
      id: 's',
      text, 
      state: 'ongoing',
    }
    this.todos.next([...this.todos.value, t]);
  } 

  removeTodo(id:string) {
    this.todos.next(this.todos.value.filter((t) => t.id !== id));
  }

  updateTodo(t: Todo) {
    this.todos.next(this.todos.value.map((x) => t.id === x.id ? t : x));
  }
}
