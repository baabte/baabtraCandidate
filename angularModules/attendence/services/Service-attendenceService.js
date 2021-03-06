angular.module('baabtra').service('attendenceService',['$http','bbConfig',function attendenceService($http,bbConfig) {

this.courseElementsFetch = function(userCourseMappingId){
	var promise = $http({
	 	method: 'POST',
	    url: bbConfig.BWS+'courseElementsByAttendence/',
	    data:{userCourseMappingId:userCourseMappingId}
	 });
	return promise;
};

this.markAttendence = function(userCourseMappingId,tlpoint,userCourseElementType,innerIndex,attendence){
	var promise = $http({
	 	method: 'POST',
	    url: bbConfig.BWS+'MarkAttendence/',
	    data:{userCourseMappingId:userCourseMappingId,tlpoint:tlpoint,userCourseElementType:userCourseElementType,innerIndex:innerIndex,attendence:attendence}
	 });
	return promise;
};

this.loadMenteesBatchDetails = function(data){
	var promise = $http({
	 	method: 'POST',
	    url: bbConfig.BWS+'loadMenteesBatchDetails/',
	    data:{data:data}
	 });
	return promise;
};

this.loadMenteeMarkedAttendanceFromBatch = function(data){
	var promise = $http({
	 	method: 'POST',
	    url: bbConfig.BWS+'loadMenteeMarkedAttendanceFromBatch/',
	    data:{data:data}
	 });
	return promise;
};
	
}]);