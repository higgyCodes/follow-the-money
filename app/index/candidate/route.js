import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		let candidateData = new Promise(function(resolve, reject){
			resolve(
				$.ajax({
					type: 'GET',
					url: 'http://api.followthemoney.org/?f-core=1&c-t-eid=17658514&gro=c-t-pt,d-cci&APIKey=44d35039223a6288094960954df1e309&mode=json',
					success: function(data) {
						console.log(data);
					}
				})
				)
		})

		return candidateData
	}

});
