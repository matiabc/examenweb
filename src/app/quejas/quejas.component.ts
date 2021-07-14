import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.sass']
})
export class QuejasComponent implements OnInit {

  formulario:FormGroup;

  enviado =0;
  
  constructor(public form:FormBuilder, private servicio:ServicioService) { 

    this.formulario = this.form.group({
      nombre:['',Validators.required],
      comentario:['',Validators.required],
      pais:['',Validators.required],

    });



}
  ngOnInit(): void {
  }
  onSubmit() {
    this.servicio.quejas.push(this.formulario.value);
    this.enviado=1;
  }

}


