import { Component } from '@angular/core';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent {


   task = {
    employeeName: '',
    title: '',
    priority: 'Low',
    dueDate: ''
  };

  tasks: any[] = [];

  addTask() {
    const currentDate = new Date();
    const dueDate = new Date(this.task.dueDate);

    if (dueDate < currentDate) {
      alert('Due date cannot be in the past!');
      return;
    }

    this.tasks.push({ ...this.task });
    this.task = {
      employeeName: '',
      title: '',
      priority: 'Low',
      dueDate: ''
    };
  }

  completeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getPriorityClass(priority: string): string {
  switch (priority) {
    case 'Low': return 'low-priority';
    case 'Medium': return 'medium-priority';
    case 'High': return 'high-priority';
    default: return '';
  }
}

getFontSize(priority: string): string {
  switch (priority) {
    case 'Low': return '14px';
    case 'Medium': return '16px';
    case 'High': return '18px';
    default: return '14px';
  }
}

}
