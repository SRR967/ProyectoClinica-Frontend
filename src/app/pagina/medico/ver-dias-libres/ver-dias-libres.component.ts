import { Component, Input } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';

@Component({
  selector: 'app-ver-dias-libres',
  templateUrl: './ver-dias-libres.component.html',
  styleUrls: ['./ver-dias-libres.component.css']
})
export class VerDiasLibresComponent {

  verDiasLibres: any[]=[]

  @Input('cedula') cedula: any

  constructor(public medicoService: MedicoService) {}


  ngOnInit(): void {
  
  }

  getVerDiasLibres(){  
    this.medicoService.getVerDiasLibres(this.cedula).subscribe({
      next: (res: any[]) => {
        this.verDiasLibres = res;
      },
      error: () => {
        this.verDiasLibres = [];
      },
  });
}
}
