import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { TasksService } from '../services/api-service.service';

import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];

  title = 'masterApp';

  constructor(private _dialog: MatDialog, private _tasksService: TasksService) {}

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  ngOnInit() {
    this._tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks); // para verificar que se recibieron las tareas
    });
  }
}
