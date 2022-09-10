export class Pendiente {
  constructor(
    public titulo: string,
    public descipcion: string,
    public fecha: Date,
    public estado: number,
    public id?: number
  ) {}
}
