export class AtenderCitaDTO {
  idCita: number = 0;
  sintomas: string = "";
  diagnostico: string = "";
  tratamiento: string = "";
  notas: string = "";
  medicamentos: MedicamentosDTO[] = [];
}

export class MedicamentosDTO {
  // Define las propiedades para los medicamentos según tus necesidades
  nombre: string = "";
  dosis: string = "";
  // Agrega otras propiedades según sea necesario
}
