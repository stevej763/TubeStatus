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

        $scope.tableRowClass = (station) => {
            let severity = station.lineStatuses[0].statusSeverity
            let colorClass;
            console.log(severity)

            if (severity < 5) {
                colorClass = "table-danger"
            } else if (severity < 7) {
                colorClass = "table-warningr"
            } else if (severity < 10) {
                colorClass = "table-info"
            } else if (severity == 10) {
                colorClass = "table-success"
            }
            console.log(colorClass)
            return colorClass
        }

    })