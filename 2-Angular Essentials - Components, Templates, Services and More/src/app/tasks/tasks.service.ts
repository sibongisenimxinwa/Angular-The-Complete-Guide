import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics and advanced concepts of Angular',
      dueDate: '2025-01-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master C# and .NET Core',
      summary: 'Learn all the basics and advanced concepts of C# and .NET Core',
      dueDate: '2025-01-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Microsoft Azure DevOps',
      summary:
        'Learn all the basics and advanced concepts of Microsoft Azure DevOps',
      dueDate: '2025-01-01',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
