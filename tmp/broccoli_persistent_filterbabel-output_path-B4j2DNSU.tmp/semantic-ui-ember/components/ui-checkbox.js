define('semantic-ui-ember/components/ui-checkbox', ['exports', 'ember', 'semantic-ui-ember/mixins/checkbox'], function (exports, _ember, _semanticUiEmberMixinsCheckbox) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsCheckbox['default'], {
    type: 'checkbox',
    ignorableAttrs: ['checked', 'label', 'disabled'],

    // Internal wrapper for onchange, to pass through checked
    _onChange: function _onChange() {
      var checked = this.execute('is checked');
      return this.attrs.onChange(checked, this);
    }
  });
});