import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

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

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      nombre: '',
      apellido: '',
      registro: '',
      descripcion: '',
      fecha: '',
      precio: '',
      proyecto: '',
      tipo: '',
      categoria: ''
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
