define('semantic-ui-ember/semantic', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Semantic = _ember['default'].Namespace.create({
    UI_DEBUG: false,
    UI_PERFORMANCE: false,
    UI_VERBOSE: false
  });

  exports['default'] = Semantic;
});