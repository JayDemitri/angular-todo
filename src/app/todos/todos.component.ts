import { Component } from '@angular/core';

// Todo Component Imports
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
    /**
     * Here we just load in the individal compnents that make up out ToDo App
     */
}
