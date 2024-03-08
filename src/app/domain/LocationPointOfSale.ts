export type LocationJSON = {
	ubicacionGeograficaX: number,
    ubicacionGeograficaY: number,
    calle: string, 
    altura: number,
    localidad: string,
    provincia: string
}

export class LocationPointOfSale {
    constructor(
        public geographicLocationX: number, 
        public geographicLocationY: number,
        public street: string,
        public streetHeight: number,
        public location: string,
        public province: string
    ) {}

    static fromJSON(locationJSON: LocationJSON): LocationPointOfSale {
		return Object.assign(
			new LocationPointOfSale(
				locationJSON.ubicacionGeograficaX,
                locationJSON.ubicacionGeograficaY,
                locationJSON.calle,
                locationJSON.altura,
                locationJSON.localidad,
                locationJSON.provincia
			), 
			locationJSON
		)
	}

	toJSON(): LocationJSON {
		return {
			ubicacionGeograficaX: this.geographicLocationX,
			ubicacionGeograficaY: this.geographicLocationY,
			calle: this.street,
            altura: this.streetHeight,
            localidad: this.location,
            provincia: this.province
		}
	}
}
