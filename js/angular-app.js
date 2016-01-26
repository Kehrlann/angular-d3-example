'use strict';
(function(){
    
    function svodTable($scope)
    {
        $scope.villes = [   { id : "06088",  region :	"93", departement :	"06"    , nom : "Nice",	                    population : 343629    },
                            { id : "13001",  region :	"93", departement :	"13"    , nom : "Aix-en-Provence",	        population : 141148    },
                            { id : "13055",  region :	"93", departement :	"13"    , nom : "Marseille",	            population : 852516    },
                            { id : "14118",  region :	"25", departement :	"14"    , nom : "Caen",	                    population : 108365    },
                            { id : "21231",  region :	"26", departement :	"21"    , nom : "Dijon",	                population : 152071    },
                            { id : "25056",  region :	"43", departement :	"25"    , nom : "Besançon",	                population : 116353    },
                            { id : "29019",  region :	"53", departement :	"29"    , nom : "Brest",	                population : 139676    },
                            { id : "30189",  region :	"91", departement :	"30"    , nom : "Nîmes",	                population : 146709    },
                            { id : "31555",  region :	"73", departement :	"31"    , nom : "Toulouse",	                population : 453317    },
                            { id : "33063",  region :	"72", departement :	"33"    , nom : "Bordeaux",	                population : 241287    },
                            { id : "34172",  region :	"91", departement :	"34"    , nom : "Montpellier",	            population : 268456    },
                            { id : "35238",  region :	"53", departement :	"35"    , nom : "Rennes",	                population : 209860    },
                            { id : "37261",  region :	"24", departement :	"37"    , nom : "Tours",	                population : 134978    },
                            { id : "38185",  region :	"82", departement :	"38"    , nom : "Grenoble",	                population : 158346    },
                            { id : "42218",  region :	"82", departement :	"42"    , nom : "Saint-Étienne",	        population : 171483    },
                            { id : "44109",  region :	"52", departement :	"44"    , nom : "Nantes",	                population : 291604    },
                            { id : "45234",  region :	"24", departement :	"45"    , nom : "Orléans",	                population : 114286    },
                            { id : "49007",  region :	"52", departement :	"49"    , nom : "Angers",	                population : 149017    },
                            { id : "51454",  region :	"21", departement :	"51"    , nom : "Reims",	                population : 181893    },
                            { id : "54395",  region :	"41", departement :	"54"    , nom : "Nancy",	                population : 105067    },
                            { id : "57463",  region :	"41", departement :	"57"    , nom : "Metz",	                    population : 119551    },
                            { id : "59350",  region :	"31", departement :	"59"    , nom : "Lille",	                population : 228652    },
                            { id : "63113",  region :	"83", departement :	"63"    , nom : "Clermont-Ferrand",	        population : 141569    },
                            { id : "66136",  region :	"91", departement :	"66"    , nom : "Perpignan",	            population : 120489    },
                            { id : "67482",  region :	"42", departement :	"67"    , nom : "Strasbourg",	            population : 274394    },
                            { id : "68224",  region :	"42", departement :	"68"    , nom : "Mulhouse",	                population : 110755    },
                            { id : "69123",  region :	"82", departement :	"69"    , nom : "Lyon",	                    population : 496343    },
                            { id : "69266",  region :	"82", departement :	"69"    , nom : "Villeurbanne",	            population : 146282    },
                            { id : "72181",  region :	"52", departement :	"72"    , nom : "Le Mans",	                population : 143599    },
                            { id : "75056",  region :	"11", departement :	"75"    , nom : "Paris",	                population : 2240621   },
                            { id : "76351",  region :	"23", departement :	"76"    , nom : "Le Havre",	                population : 173142    },
                            { id : "76540",  region :	"23", departement :	"76"    , nom : "Rouen",	                population : 111557    },
                            { id : "80021",  region :	"22", departement :	"80"    , nom : "Amiens",	                population : 132727    },
                            { id : "83137",  region :	"93", departement :	"83"    , nom : "Toulon",	                population : 164899    },
                            { id : "87085",  region :	"74", departement :	"87"    , nom : "Limoges",	                population : 136221    },
                            { id : "92012",  region :	"11", departement :	"92"    , nom : "Boulogne-Billancourt",	    population : 117126    },
                            { id : "93048",  region :	"11", departement :	"93"    , nom : "Montreuil",	            population : 103520    },
                            { id : "93066",  region :	"11", departement :	"93"    , nom : "Saint-Denis",	            population : 108274    },
                            { id : "95018",  region :	"11", departement :	"95"    , nom : "Argenteuil",	            population : 104962    },
                            { id : "97411",  region :	"04", departement :	"974"   , nom : "Saint-Denis",	            population : 145238    },
                            { id : "97415",  region :	"04", departement :	"974"   , nom : "Saint-Paul",	            population : 104646    } 
                        ];
                        
                        
        $scope.tri = "id";
        $scope.triAscendant = true;
        $scope.selectedColonne = "id";

        
        $scope.clicTri = function(colonne)
        {
            $scope.triAscendant = colonne != $scope.selectedColonne || !$scope.triAscendant;

            $scope.selectedColonne = colonne;

            switch (colonne){
                case 'id':
                    $scope.tri = [];
                    $scope.tri.push(($scope.triAscendant ? '' : '-') + 'id');
                    $scope.tri.push("nom");
                    break;
                case 'region':
                    $scope.tri = [];
                    $scope.tri.push(($scope.triAscendant ? '' : '-') + 'region');
                    $scope.tri.push("nom");
                    break;
                case 'departement':
                    $scope.tri = [];
                    $scope.tri.push(($scope.triAscendant ? '' : '-') + 'departement');
                    $scope.tri.push("nom");
                    break;
                case 'nom':
                    $scope.tri = ($scope.triAscendant ? '' : '-') + 'nom';
                    break;
                case 'population':
                    $scope.tri = ($scope.triAscendant ? '' : '-') + 'population';
                    break;
            }

        };
    };

    angular .module('svod', [])
            .controller (   'svodTable',
                            ["$scope", svodTable]
                        );
                        


})();