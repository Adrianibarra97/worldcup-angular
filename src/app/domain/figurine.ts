import { Player, PlayerJSON } from "./player"
import { UsuarioGiveByJson } from "./user"
import { calcularEdad } from "../util/calcularEdad"

const MULTIPLICADOR_NIVEL_IMPRESION = 0.85
const VALORACION_PISO = 100.0
const MULTIPLICADOR_ON_FIRE = 1.2
const MULTIPLICADOR_NUMERO_PARIDAD = 1.1
enum NivelImpresion {
	"BAJA" = 1.0,
	"MEDIA" = MULTIPLICADOR_NIVEL_IMPRESION,
	"ALTA" = MULTIPLICADOR_NIVEL_IMPRESION,
}

export type FilterFigurineJSON = {
	esPromesa: boolean,
	esOnFire: boolean,
	valoracionMin: number,
	valoracionMax: number
}

export type FigurineJSON = {
	id: number,
	numero: number,
	nivelImpresion: string,
	onFire: boolean,
	url: string,	
	jugador: PlayerJSON,
}

export type FigurineGiveByJSON = {
	id: number,
	numero: number,
	nivelImpresion: string,
	onFire: boolean,
	jugador: PlayerJSON,
	url: string,
	cedidaPor: UsuarioGiveByJson
}

export class Figurine {
	constructor(
		public id: number,
		public numberFigurine: number,
		public impressionLevel: string,
		public onFire: boolean,
		public player: Player,
		public url: string,
		public giveBy?: UsuarioGiveByJson
	) {}
	
	edad(): number {
		return calcularEdad(this.player.birthOfDate)
	}

	valoracionBase(): number{
		return Math.floor(VALORACION_PISO * this.valoracionPorOnFire() * this.valoracionPorSerNumeroPar() * this.valoracionPorNivelImpresion())
	}
	
	valoracionPorOnFire(): number {
		return this.onFire ? MULTIPLICADOR_ON_FIRE : 1.0
	}

	valoracionPorSerNumeroPar(): number {
		return this.numberFigurine % 2 == 0 ? MULTIPLICADOR_NUMERO_PARIDAD : 1.0
	}

	valoracionPorNivelImpresion(): number {
		return NivelImpresion[this.impressionLevel as keyof typeof NivelImpresion] ? NivelImpresion[this.impressionLevel as keyof typeof NivelImpresion] : 1.0
	}

	static fromJSON(figurineGiveByJSON: FigurineGiveByJSON): Figurine {
		return Object.assign(
			new Figurine(
				figurineGiveByJSON.id,
				figurineGiveByJSON.numero,
				figurineGiveByJSON.nivelImpresion,
				figurineGiveByJSON.onFire,
				Player.fromJSON(figurineGiveByJSON.jugador),
				figurineGiveByJSON.url,
				figurineGiveByJSON.cedidaPor
			), 
			figurineGiveByJSON
		)
	}

	static fromJSONDefault(figurineJSON: FigurineJSON): Figurine {
		return Object.assign(
			new Figurine(
				figurineJSON.id,
				figurineJSON.numero,
				figurineJSON.nivelImpresion,
				figurineJSON.onFire,
				Player.fromJSON(figurineJSON.jugador),
				figurineJSON.url,
			), 
			figurineJSON
		)
	}

	toJSON(): FigurineJSON {
		return {
			id: this.id,
			numero: this.numberFigurine,
			nivelImpresion: this.impressionLevel,
			onFire : this.onFire,
			url: this.url,
			jugador: this.player.toJSON()
		}
	}
}
