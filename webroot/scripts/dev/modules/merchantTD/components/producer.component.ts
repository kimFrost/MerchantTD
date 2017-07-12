///<reference path="../merchantTD.module.ts"/>
///<reference path="../services/gamemode.service.ts"/>
///<reference path="../classes/resource.ts"/>
///<reference path="../classes/need.ts"/>
///<reference path="../classes/stat.ts"/>


namespace MerchantTDModule {

	type GamemodeService = MerchantTDModule.GamemodeService;

	export class ProducerController {

		private parent: StructureController;

		public produceId: string;
		public produceReq: string;
		public produceTime: number;
		public produceTags: Array<string>;

		constructor(
			$rootScope: ng.IRootScopeService,
			$scope: ng.IScope,
			private $timeout: ng.ITimeoutService,
			private $interval: ng.IIntervalService,
			private $element: any, //IAugmentedJQuery
			private gamemodeService: GamemodeService
		) { }

		$onInit() {
			if (this.parent) {
				if (this.produceTime > 0 && this.produceId) {
					this.$interval(() => {
						if (this.produceReq) {
							
						}
						let resource = new Resource(this.produceId, this.produceId, this.produceTags);
						this.parent.resources.push(resource);
					}, this.produceTime);
				}
			}
		}

	}

	export class ProducerComponent implements ng.IComponentOptions {

		public bindings: any;
		public controller: any;
		public require: any;

		constructor() {
			this.require = {
				parent: '^structure'
			};
			this.bindings = {
				produceId: '<',
				produceReq: '<',
				produceTime: '<',
				produceTags: '<'
			};
			this.controller = ProducerController;
		}
	}

	angular.module(MerchantTDModule.moduleId).component("producer", new ProducerComponent());

}

