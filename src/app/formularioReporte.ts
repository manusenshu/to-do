export class FormularioReporte {
  constructor(
      public estado: number,
      public tipoFecha: number,
      public fechaInicio: Date,
      public fechaFin: Date
  ) { }
}