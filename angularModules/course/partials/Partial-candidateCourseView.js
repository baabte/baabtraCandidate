angular.module('baabtra').controller('CandidatecourseviewCtrl',['$scope','$rootScope','candidateCourseView','commonService','$state',function($scope,$rootScope,candidateCourseView,commonService,$state){

	/*login detils start*/
	if(!$rootScope.userinfo){
		commonService.GetUserCredentials($scope);
		$rootScope.hide_when_root_empty=false;
		return;
	}

	if(angular.equals($rootScope.loggedIn,false)){
		$state.go('login');
	}

	var rm_id = $rootScope.userinfo.ActiveUserData.roleMappingId.$oid;
	var roleId = $rootScope.userinfo.ActiveUserData.roleMappingObj.fkRoleId;
	var companyId = $rootScope.userinfo.ActiveUserData.roleMappingObj.fkCompanyId.$oid;
	/*login detils ends*/
	
var courses = candidateCourseView.loadCoursesForCandidates($rootScope.userinfo.userLoginId);
	courses.then(function (data) {
		if(angular.fromJson(JSON.parse(data.data)).length){
			$scope.courses = angular.fromJson(JSON.parse(data.data));
		}else{
			$scope.courses = {};
		}
		
});

$scope.navigateToDetails=function(courseId){
	$state.go('home.main.CandidateCourseDetails',{courseId:courseId});
	// $state.go('home.main.viewCourse',{courseId:courseId});
};
$scope.navigateToClassroom=function(courseMappingId){
	$state.go('home.main.viewMyCourse',{courseMappingId:courseMappingId});
};


}]);