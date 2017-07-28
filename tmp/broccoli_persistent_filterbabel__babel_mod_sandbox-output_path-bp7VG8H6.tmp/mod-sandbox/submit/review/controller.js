define('mod-sandbox/submit/review/controller', ['exports', 'ember', 'mod-sandbox/mixins/shared-actions'], function (exports, _ember, _modSandboxMixinsSharedActions) {
	exports['default'] = _ember['default'].Controller.extend(_modSandboxMixinsSharedActions['default'], {
		actions: {
			submit: function submit() {
				console.log("submitted");
				this.transitionToRoute('submit.success');
			}
		}
	});
});