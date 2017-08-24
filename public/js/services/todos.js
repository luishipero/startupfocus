angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			get : function() {
				return $http.get('/api/expenses');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			addExpense : function(expenseData) {
				return $http.post('/api/expenses', expenseData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);