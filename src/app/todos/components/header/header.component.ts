import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Our todo input empty untill filled
  text: string = '';

  // Our todo service
  todoService = inject(TodosService)

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement
    this.text = target.value;
  }

  addTodo(): void{
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
