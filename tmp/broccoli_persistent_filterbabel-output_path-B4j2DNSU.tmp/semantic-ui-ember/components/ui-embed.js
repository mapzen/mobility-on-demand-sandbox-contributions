define('semantic-ui-ember/components/ui-embed', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'embed',
    classNames: ['ui', 'embed'],
    attributeBindings: ['data-icon', 'data-id', 'data-placeholder', 'data-source', 'data-url'],
    ignorableAttrs: ['data-icon', 'data-id', 'data-placeholder', 'data-source', 'data-url']
  });
});