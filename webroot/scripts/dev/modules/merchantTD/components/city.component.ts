///<reference path="../merchantTD.module.ts"/>
///<reference path="../services/gamemode.service.ts"/>
///<reference path="../classes/tile.ts"/>


namespace MerchantTDModule {

	type GamemodeService = MerchantTDModule.GamemodeService;

	export class CityController {

		public data: any;
		public time: number;

		public tiles: Array<Tile> = [];


		constructor(
			$rootScope: ng.IRootScopeService,
			$scope: ng.IScope,
			private $timeout: ng.ITimeoutService,
			private $interval: ng.IIntervalService,
			private $element: any, //IAugmentedJQuery
			private gamemodeService: GamemodeService
		) {

			for (let y = 0; y < 15; y++) {
				for (let x = 0; x < 20; x++) {
					let tile = new Tile(x, y, 0);
					this.tiles.push(tile);
				}
			}

			$scope.$on('timeUpdate', (e: any, arg: any) => {
				//this.onTimeUpdate(arg...);
				this.onTimeUpdate(arg.currentTime, arg.timeProgressed);
			});

		}

		$onInit() {

		}

		public onTimeUpdate(time: number, timeProgressed: number): void {
			//console.log('onTimeUpdate', time, timeProgressed);
			this.time = time;
			//this.progressNeeds(timeProgressed);
		}

	}

	export class CityComponent implements ng.IComponentOptions {

		public bindings: any;
		public controller: any;
		public templateUrl: string;
		public transclude: any;

		constructor() {
			this.bindings = {};
			this.transclude = true;

			this.controller = CityController;
			this.templateUrl = 'modules/merchantTD/templates/City.template.html';
		}
	}

	angular.module(MerchantTDModule.moduleId).component("City", new CityComponent());

}

