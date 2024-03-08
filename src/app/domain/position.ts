export type PositionJSON = {
	valoracionBase: number,
	valoracion: number,
}

export class Position {
    constructor(
       public baseValuation: number,
       public valuation: number,
    ) {}

    static fromJSON( positionJSON: PositionJSON): Position {
		return Object.assign(
			new Position(
				positionJSON.valoracionBase,
                positionJSON.valoracion
			), 
		)
	}

	toJSON(): PositionJSON {
		return {
            valoracionBase: this.baseValuation,
            valoracion: this.valuation
		}
	}
}