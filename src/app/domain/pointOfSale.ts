import { LocationJSON, LocationPointOfSale } from "./LocationPointOfSale"

enum icono {
	"Kiosko" = "fa-solid fa-store",
	"Libreria" = "fa-solid fa-pen-ruler",
	"Supermercado" = "fa-solid fa-basket-shopping"
}

enum tipoPuntoDeVenta {
	"fa-solid fa-store" = "Kiosko",
	"fa-solid fa-pen-ruler" = "Libreria",
	"fa-solid fa-basket-shopping" = "Supermercado"
}

export type FilterPointOfSalesJSON = {
	byDistance: boolean,
	byCheapFigurine: boolean,
	byMostStock: boolean,
	byClosestPlaces: boolean
}

export type PointOfSaleJSON = {
	id: number,
	nombreComercial: string,
	stockDeSobres: number,
	domicilioPuntoDeVenta: LocationJSON,
	distancia: number,
	precioPorSobre: number,
	pedidosPendientes: number,
	tipoPuntoDeVenta: string
}

export class PointOfSale {
    constructor(
		public id: number,
		public name: string, 
		public stockEnvelopes: number,
		public locationPointOfSale: LocationPointOfSale,
    	public icon: string,
		public distancia: number,
		public precioPorSobre: number,
		public pedidosPendientes:number
    ) {}

    static fromJSON( pointOfSaleJSON: PointOfSaleJSON ): PointOfSale {
		return Object.assign(
			new PointOfSale(
				pointOfSaleJSON.id,
				pointOfSaleJSON.nombreComercial,
        pointOfSaleJSON.stockDeSobres,
        LocationPointOfSale.fromJSON(pointOfSaleJSON.domicilioPuntoDeVenta),
        icono[pointOfSaleJSON.tipoPuntoDeVenta as keyof typeof icono],
				pointOfSaleJSON.distancia,
				pointOfSaleJSON.precioPorSobre,
				pointOfSaleJSON.pedidosPendientes
			), 
			pointOfSaleJSON
		)
	}

	toJSON(): PointOfSaleJSON {
		return {
			id: this.id,
			nombreComercial: this.name,
			stockDeSobres: this.stockEnvelopes,
			domicilioPuntoDeVenta: this.locationPointOfSale.toJSON(),
			distancia: this.distancia,
			precioPorSobre: this.precioPorSobre,
			pedidosPendientes: this.pedidosPendientes,
			tipoPuntoDeVenta: tipoPuntoDeVenta[this.icon as keyof typeof tipoPuntoDeVenta]
		}
	}
}
