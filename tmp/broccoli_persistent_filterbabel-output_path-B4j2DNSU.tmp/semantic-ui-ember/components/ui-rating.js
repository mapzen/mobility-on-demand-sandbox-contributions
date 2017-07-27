define('semantic-ui-ember/components/ui-rating', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'rating',
    classNames: ['ui', 'rating'],
    ignorableAttrs: ['rating'],

    willInitSemantic: function willInitSemantic(settings) {
      this._super.apply(this, arguments);
      if (settings.initialRating == null && this.get('rating')) {
        settings.initialRating = this.get('rating');
      }
    }
  });
});