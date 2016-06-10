angular.module('poke.directives')
    .directive('pageHome', function () {
        return {
            templateUrl: 'app/directives/pages/home/home.html',
            controllerAs: 'pageHome',
            controller: ['pokemonService', function (pokemonService){

                var vm = this; //Vervangt scope, nog steeds binnen digest cycle
                pokemonService.getAllPokemons().then(function (pokemons) {
                    console.log(pokemons);
                    vm.pokemons = pokemons;
                });
            }]
        };
    });
