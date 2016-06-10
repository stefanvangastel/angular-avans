
angular.module('poke.services')
    .factory('pokemonService', ['$http', function ($http) {
        var base = "http://localhost:9090";

        function getAllPokemons() {
            return $http({
                method: 'get',
                url: base + '/pokemon'
            }).then(function (response) {
                return response.data;  
            });
        }

        return {
            getAllPokemons: getAllPokemons
        };

    }]);