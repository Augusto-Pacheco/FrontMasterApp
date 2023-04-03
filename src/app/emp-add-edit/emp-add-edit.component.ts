import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';
import { TasksService } from '../services/api-service.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  tasks: Task[] = [];

  test: string[] = [
    'texto 1',
    'texto 2',
    'texto 3',
    'texto 4'
  ]

  type: string[] = [
    'Ingreso',
    'Egreso'
  ]

  projects: string[] = [
    'texto 1',
    'texto 2',
    'texto 3',
    'texto 4'
  ]

  constructor(private _fb: FormBuilder, private _tasksService: TasksService) {
    this.empForm = this._fb.group({
      nombre: '',
      registro: '',
      descripcion: '',
      fecha: '',
      precio: '',
      proyecto: '',
      tipo: '',
      categoria: ''
    });
  }

  ngOnInit() {
    this._tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks); // para verificar que se recibieron las tareas
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
