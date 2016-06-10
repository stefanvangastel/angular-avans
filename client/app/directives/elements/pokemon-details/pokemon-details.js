angular.module('poke.directives')
    .directive('elemPokemonDetails', function () {
        return {
            scope: {
                pokemon: '='
            },
            templateUrl: 'app/directives/elements/pokemon-details/pokemon-details.html',
            controllerAs: 'elemPokemonDetails',
            controller: [function (){

                var vm = this; //Vervangt scope, nog steeds binnen digest cycle

            }]
        };
    });
