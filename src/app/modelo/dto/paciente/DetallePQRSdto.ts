export class DetallePQRSdto {
  idPQRS: number = 0;
  idConsulta: number = 0;
  asunto: string = "";
  fechaCreacion: string = ""; // Asegúrate de que esta propiedad tenga el tipo correcto en tu aplicación
  tipoPQRS: string = ""; // Asegúrate de importar o definir TipoPQRS correctamente
  estadoPQRS: string = ""; // Asegúrate de importar o definir EstadoPQRS correctamente
  mensaje: string = "";
}
