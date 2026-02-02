import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  newTodo = '';
  todos: TodoItem[] = [];

  private storageKey = 'todos';

  ngOnInit() {
    this.loadTodos();
  }

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todos.push({
      id: Date.now(),
      title: this.newTodo,
      completed: false,
    });

    this.newTodo = '';
    this.saveTodos();
  }

  toggleTodo(todo: TodoItem) {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.saveTodos();
  }

  private saveTodos() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  private loadTodos() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.todos = JSON.parse(data);
    }
  }
}
