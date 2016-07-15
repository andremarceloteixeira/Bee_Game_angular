/* 
 * Config Module.
 */
var beeGame = angular.module("beeGame", ["ngMaterial", "ngRoute", 
     "ngMessages", "ngCookies", "ngFlash", "pascalprecht.translate"]);

var LANG_EN = "en";

beeGame.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, $translateProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "views/home.html",
                controller: "homeController"
            })
            .otherwise({
                redirectTo: "/"
            });

    $mdThemingProvider.theme("primary")
            .primaryPalette("blue")
            .accentPalette("blue");

    $translateProvider.translations("en", languageEN);
    $translateProvider.registerAvailableLanguageKeys(["en"], {
        en_US: "en",
        en_UK: "en"
    });
    $translateProvider.preferredLanguage(LANG_EN);
    $translateProvider.fallbackLanguage(LANG_EN);
    $translateProvider.useSanitizeValueStrategy("escape");
});

