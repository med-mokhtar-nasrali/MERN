import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { Student } from './student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to Student App!';
  course = 'Full-Stack Development';
  message = 'Student list has been updated!';

  allStudents: Student[] = [];
  onNotify(message: string) {
    console.log(message);
  }
}
