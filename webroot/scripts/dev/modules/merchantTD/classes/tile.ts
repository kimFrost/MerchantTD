
namespace MerchantTDModule {

    //declare class StructureController {} // Not needed in typescript?

    export class Tile {
        public Id: string;
        public X: number;
        public Y: number;
        public Location: number;
        public Structure: StructureController;
        public AdjacentTiles: Array<Tile>;

        constructor(
            X: number,
            Y: number,
            Location: number
        ) {
            this.X = X;
            this.Y = Y;
            this.Location = Location;
            this.AdjacentTiles = [];
        }

        public AttachStructure(structure: StructureController): void {
            if (structure) {
                this.Structure = structure;
            }
        }

    }

}

