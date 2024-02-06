import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  /** Filter Signal - Watched by all filter aware elements*/
  filterSig = signal<FilterEnum>(FilterEnum.all);

  /** Todo Signal - Populated with our todos if there are any*/
  todosSig = signal<TodoInterface[]>([]);


  /**
   * Change Filter
   * 
   * Will set out todo filter to either all, active or complete
   * @param filterName 
   */
  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName)
  }

  /**
   * Add ToDo
   * 
   * Created a new Todo, by creating a new todo
   * add it to our list and update the signal
   * 
   * @param text 
   */
  addTodo(text: string): void {

    // Create new todo
    const newTodo: TodoInterface = {
      text, // The text of out todo
      isCompleted: false, // By default the todo is not completed
      id: Math.random().toString(16) // A Random Id
    }

    // Update our todo signal
    this.todosSig.update(todos => [...todos, newTodo])
  }

  /**
   * Change Todo
   * 
   * Will take our updated text with an id to update the todo edited and update
   * our signal after
   * 
   * @param id 
   * @param text 
   */
  changeTodo(id: string, text: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  /**
   * Remove Todo
   * 
   * Update our signal removing the todo with the id given
   * 
   * @param id 
   */
  removeTodo(id: string): void {
    this.todosSig.update((todos) => todos.filter(todo => todo.id !== id))
  }

  /**
   * Toggle Todo
   * 
   * Updated our signal maping our todo with the given id 
   * and changing the isCompleted to is opposing value
   * 
   * @param id 
   */
  toggleTodo(id: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    )
  }

  /**
   * Toggle All
   * 
   * Will map through all of the todos changing the isCompleted value
   * @param isCompleted 
   */
  toggleAll(isCompleted: boolean): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted: !todo.isCompleted }))
    )
  }
}
