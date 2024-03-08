export type SelectionJSON = {
	id: number,
	pais: string,
	nombreConfederacion: string,
	copasDelMundo: number,
}

export class NationalTeam {
    constructor(
			public id: number,
      public country: string,
      public confederationName: string,
      public worldCups: number,
    ) {}

    static fromJSON( selectionJSON: SelectionJSON): NationalTeam {
		return Object.assign(
			new NationalTeam(
				selectionJSON.id,
				selectionJSON.pais,
        selectionJSON.nombreConfederacion,
        selectionJSON.copasDelMundo
			), 
		)
	}

	toJSON(): SelectionJSON {
		return {
			id:this.id,
      pais: this.country,
      nombreConfederacion: this.confederationName,
      copasDelMundo: this.worldCups
		}
	}
}