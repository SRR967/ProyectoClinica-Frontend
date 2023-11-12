export class DetalleConsultaDTO {
  idConsulta: number = 0;
  fechaConsulta: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  fechaSolicitud: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  especialidad: string = ""; // Asegúrate de importar o definir Especialidad correctamente
  nombreMedico: string = "";
  motivo: string = "";
  diagnostico: string = "";
  tratamiento: string = "";
  medicamento: string = "";
}
