import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-buttons', 'Integration | Component | nav buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-buttons}}`);

  assert.equal(this.$().text().trim(), 'Next');

  // Template block usage:
  this.render(hbs`
    {{#nav-buttons back="foo" next="bar"}}
    {{/nav-buttons}}
  `);
  assert.equal(this.$("#back").text().trim(), 'Back');
});