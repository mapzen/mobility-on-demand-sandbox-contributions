define('mod-sandbox/mixins/shared-actions', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Mixin.create({
		actions: {
			changeRoute: function changeRoute(route) {
				this.transitionToRoute(route);
			}
		}
	});
});