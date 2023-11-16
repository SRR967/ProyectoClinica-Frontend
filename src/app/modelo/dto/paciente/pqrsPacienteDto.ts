interface PqrsPacienteDto {
    codigo: number;
    estadoPQRS: string; // Asegúrate de importar o definir correctamente el tipo EstadoPQRS
    asunto: string;
    fecha: string; // Puedes usar una cadena para representar la fecha o un tipo específico de fecha en TypeScript
}

export default PqrsPacienteDto;