import { LocationJSON, LocationPointOfSale } from "./LocationPointOfSale"

export type UserJSON = {
    id: number,
	username: string,
	nombre: string,
	apellido: string,
    fechaNacimiento: string,
    direccionMail: string,
    domicilioUsuario: LocationJSON,
    maxDistanciaConOtroUsuario: number,
    url: string
}

export type FilterUserJSON = {
    id: number
}

export type UsuarioGiveByJson = {
	nombre: string,
	apellido: string,
}

export type UserJSONLogin = {
    username: string,
    password: string
}

export class User {
    constructor(
        public id: number,
        public username: string,
        public name: string,
        public surname: string,
        public birthOfDate: Date,
        public emailAddress: string,
        public address: LocationPointOfSale,
        public maxDistanceBetweenOtherUser: number,
        public url: string
    ) {}

    static fromJSON(userJSON: UserJSON): User {
		return Object.assign(
			new User(
                userJSON.id,
				userJSON.username,
                userJSON.nombre,
                userJSON.apellido,
                new Date(userJSON.fechaNacimiento),
                userJSON.direccionMail,
                LocationPointOfSale.fromJSON(userJSON.domicilioUsuario),
                userJSON.maxDistanciaConOtroUsuario,
                userJSON.url
			), 
		)
	}

	toJSON(): UserJSON {
		return {
            id: this.id,
            username: this.username,
            nombre: this.name,
            apellido: this.surname,
            fechaNacimiento: this.birthOfDate.toDateString(),
            direccionMail: this.emailAddress,
            domicilioUsuario: this.address.toJSON(),
            maxDistanciaConOtroUsuario: this.maxDistanceBetweenOtherUser,
            url: this.url
		}
	}

    nameAndSurnameToJSON(): UsuarioGiveByJson {
		return {
            nombre: this.name,
            apellido: this.surname,
		}
	}
}
