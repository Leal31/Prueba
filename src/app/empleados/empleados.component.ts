import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  
  Nombre = "Juan";

  Apellido = "Diaz";
  
  Edad = 18;

  textoRegistro = "No hay nadie registrado";

  Empresa = "Google";

  constructor() { }

  ngOnInit(): void {
  }

  HabilitacionCuadro = true;

  usuarioRegistrado = true;
  
  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event:Event) {

    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = "El usuario se acaba de registrar";
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }
  }
}
