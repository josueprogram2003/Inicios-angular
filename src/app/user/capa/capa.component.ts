import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.css']
})
export class CapaComponent implements OnInit {
  resultado = 0;
  nombreEstudiante:String = "";
  correo:String = "";
  telefono:String = "";
  escuela:String = "";
  datos:any;
  nombre:String = "David";
  opcionSeleccionado: string  = "";
  verSeleccion: string        = "";

  constructor() { 
     this.datos=["Ingenieria de alimentos","Ingenieria de Sistemas","Ingenieria de Ambiental","Ingenieria de Civil"];
  }

  ngOnInit(): void {
  }

mostrar(){
  this.nombreEstudiante = this.nombreEstudiante;
  this.correo = this.correo;
  this.telefono = this.telefono;
}

 capturar(){
  this.verSeleccion = this.opcionSeleccionado;
  }
}
