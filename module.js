myModule = angular.module("myModule", [])
    .controller("myController", ($scope, $http) => {
        $scope.stations = []
        $http({
            method: 'get',
            url: 'https://api.tfl.gov.uk/Line/Mode/tube/Status'
        }).then((response) => {
            console.log(response.data)
            $scope.stations = response.data
        }).catch((err) => {
            console.log(err)
        })

        $scope.tableRowClass = (severity) => {
            return severity
        }

    }
    
    
    )
