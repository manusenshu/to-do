export class Pediente {
    constructor(
        public titulo: string,
        public descripcion: string,
        public fecha: Date,
        public caducidad: Date,
        public cierre: Date,
        public estado: number,
        public lMod: Date,
        public id?: number,
    ) { }

}
