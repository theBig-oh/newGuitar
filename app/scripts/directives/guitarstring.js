'use strict';

/**
 * @ngdoc directive
 * @name newGuitarApp.directive:guitarString
 * @description
 * # guitarString
 */
angular.module('newGuitarApp')
  .directive('guitarString', function () {
    return {
    	scope:{
    		notes:'=notes',
    		root: '=root',
    		scale: '@scale',
    		colors: '@colors',
    		chord: '@chord',
    		chcolor: '@chcolor'
    	},
      templateUrl:'templates/guitarString.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        	//INTIALIZE VARIABLES
        	//Old way until I figure out a good way to do this recursively
        	scope.note0 = (scope.root + 0) %12,
        	scope.note1 = (scope.root + 1) %12,
        	scope.note2 = (scope.root + 2) %12,
        	scope.note3 = (scope.root + 3) %12,
        	scope.note4 = (scope.root + 4) %12,
        	scope.note5 = (scope.root + 5) %12,
        	scope.note6 = (scope.root + 6) %12,
        	scope.note7 = (scope.root + 7) %12,
        	scope.note8 = (scope.root + 8) %12,
        	scope.note9 = (scope.root + 9) %12,
        	scope.note10 = (scope.root + 10) %12,
        	scope.note11 = (scope.root + 11) %12;
        	//
        	//BUILD ARRAY OF NOTES
        	scope.newNotes = [];
        	//
        	scope.noteSwitch = false;

        	scope.colorChange = function(selNote,selScale){
        		for(var x=0;x<=selScale.length-1;x++){
        			if(selNote == selScale[x]){
        				element.css('background-color',scope.colors[x]);
        				element.css('color','white');
        			}
        		}


        	}


        	 scope.$watchGroup(['root','notes','newNotes','scale','colors','chord','chcolor'],function(newVal,oldVal){
      			//WATCH FOR NEW VALUES
      			scope.root = newVal[0];
      			scope.notes = newVal[1];
      			scope.newNotes = angular.fromJson(newVal[2]);
      			scope.scale = angular.fromJson(newVal[3]);
      			scope.colors = angular.fromJson(newVal[4]);
      			scope.chord = angular.fromJson(newVal[5]);
      			scope.chcolor = newVal[6];
      			//WATCH FOR NEW VALUES
      			

      			//NEW NOTES
      			scope.note0 = (scope.root + 0) %12,
        		scope.note1 = (scope.root + 1) %12,
        		scope.note2 = (scope.root + 2) %12,
        		scope.note3 = (scope.root + 3) %12,
        		scope.note4 = (scope.root + 4) %12,
        		scope.note5 = (scope.root + 5) %12,
        		scope.note6 = (scope.root + 6) %12,
        		scope.note7 = (scope.root + 7) %12,
        		scope.note8 = (scope.root + 8) %12,
        		scope.note9 = (scope.root + 9) %12,
        		scope.note10 = (scope.root + 10) %12,
        		scope.note11 = (scope.root + 11) %12;
        		//NEW NOTES

      			





        	 }) ;



        



      }
    };
  });
