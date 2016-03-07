/**
 * Created by aleplusplus on 1/10/16.
 */

angular.module('first-step-angularjs.services',[]).factory('Device',function($resource){
    return $resource('phones/:phoneId.json',{},{
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});