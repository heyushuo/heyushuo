var app = angular.module('myApp' ,[]);
	app.controller('myCtrl' , function($scope) {
		$scope.items = [{
			'name': '鱼香肉丝',
			'price' : 15.12
		},{
			'name': '尖椒肉丝',
			'price' : 14.90
		},{
			'name': '红烧鱼',
			'price' : 188.88
		},{
			'name': '油焖大虾',
			'price' : 99.99
		}];
		var length = $scope.items.length;
		var arr = [];
		for(var i = 0; i<length ;i++) {
			arr[i] = 1;
		}
		$scope.varList = {
			itemNum : arr,
			total :0
		};
        $scope.$watch("varList.itemNum", function() {
            getTotal();
        }, true);
		$scope.reduce = function($index) {
			if($scope.varList.itemNum[$index] == 0) {
				return;
			} else {
				$scope.varList.itemNum[$index] --;
			}
			getTotal($index);
		} ;
		$scope.add = function($index) {
			$scope.varList.itemNum[$index] ++;
			getTotal($index);
		};
		$scope.not = function($index) {
			if( !/^\d*$/.test($scope.varList.itemNum[$index]) || /^0/.test($scope.varList.itemNum[$index]) ) {
				$scope.varList.itemNum[$index] = 1;
			}
			getTotal($index);
		};
		function getTotal($index) {
			$scope.varList.total = 0;
			for(var i = 0; i<length ;i++) {
				$scope.varList.total += $scope.varList.itemNum[i] *
				 $scope.items[i].price;
			}
			return $scope.varList.total;
		}
	});