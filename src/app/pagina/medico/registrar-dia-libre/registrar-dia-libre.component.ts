import { Component, Input } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { DiaLibreDTO } from 'src/app/modelo/dto/medico/DiaLibreDto';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-dia-libre',
  templateUrl: './registrar-dia-libre.component.html',
  styleUrls: ['./registrar-dia-libre.component.css']
})
export class RegistrarDiaLibreComponent {


  diaLibre: DiaLibreDTO;

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {
    this.diaLibre={} as DiaLibreDTO;
  }


  ngOnInit(): void {
  
  }

  registrarDiaLibre(){  
    this.medicoService.registrarDiaLibre(this.diaLibre).subscribe({
      next: (res) => {
        console.log('Se ha registrado correctamente');
      },
      error: (err) => console.log('No se ha registrado correctamente'),
    });
}

}
