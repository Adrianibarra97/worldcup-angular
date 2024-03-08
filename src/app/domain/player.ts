import { NationalTeam, SelectionJSON } from "./NationalTeam"
import { parseISO } from 'date-fns'

export type PlayerJSON = {
    id: number,
	nombre: string,
	apellido: string,
	fechaNacimiento: string,
	numeroCamiseta: number,
    seleccion: SelectionJSON,
    anioDebut: number,
    altura: number,
    peso: number,
    posicion: string,
    valoracion: number,
    esLider: boolean,
    cotizacion: number,
    esPromesa: boolean
}

export class Player {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public birthOfDate: Date,
        public numberTShirt: number,
        public nationalTeam: NationalTeam,
        public yearDebut: number,
        public height: number,
        public weight: number,
        public position: string,
        public valoracion: number,
        public price: number,
        public isLeader: boolean,
        public isPromise: boolean
    ) {}

    static fromJSON(playerJSON: PlayerJSON): Player {
        const formateo: Date = parseISO(playerJSON.fechaNacimiento)
        formateo.setMonth(formateo.getMonth() + 1) //los meses van de 0 a 11, no de 1 a 12
		return Object.assign(
			new Player(
                playerJSON.id,
				playerJSON.nombre,
                playerJSON.apellido,
                formateo,
                playerJSON.numeroCamiseta,
                NationalTeam.fromJSON(playerJSON.seleccion),
                playerJSON.anioDebut,
                playerJSON.altura,
                playerJSON.peso,
                playerJSON.posicion,
                playerJSON.valoracion,
                playerJSON.cotizacion,
                playerJSON.esLider,
                playerJSON.esPromesa
			), 
			playerJSON
		)
	}

	toJSON(): PlayerJSON {
		return {
            id:this.id,
            nombre: this.name,
            apellido: this.surname,
            fechaNacimiento: this.birthOfDate.toDateString(),
            numeroCamiseta: this.numberTShirt,
            seleccion: this.nationalTeam.toJSON(),
            anioDebut: this.yearDebut,
            altura: this.height,
            peso: this.weight,
            posicion: this.position,
            valoracion: this.valoracion,
            cotizacion: this.price,
            esLider: this.isLeader,
            esPromesa: this.isPromise
		}
	}
}