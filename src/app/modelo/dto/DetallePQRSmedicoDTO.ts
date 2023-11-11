export class DetallePQRSmedicoDTO {
  idPQRS: number = 0;
  ccPaciente: string = "";
  asunto: string = "";
  estado: string = ""; // Asegúrate de importar o definir EstadoPQRS correctamente
  tipoPQRS: string = ""; // Asegúrate de importar o definir TipoPQRS correctamente
  fechaCita: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  horacita: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  medico: string = "";
  especialidad: string = ""; // Asegúrate de importar o definir Especialidad correctamente
  fechaSolicitud: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  motivo: string = "";
}
