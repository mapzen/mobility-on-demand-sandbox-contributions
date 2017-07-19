define('mod-sandbox/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('mod-sandbox/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('mod-sandbox/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('mod-sandbox/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'mod-sandbox/tests/helpers/start-app', 'mod-sandbox/tests/helpers/destroy-app'], function (exports, _qunit, _modSandboxTestsHelpersStartApp, _modSandboxTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _modSandboxTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _modSandboxTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('mod-sandbox/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('mod-sandbox/tests/helpers/resolver', ['exports', 'mod-sandbox/resolver', 'mod-sandbox/config/environment'], function (exports, _modSandboxResolver, _modSandboxConfigEnvironment) {

  var resolver = _modSandboxResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _modSandboxConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _modSandboxConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('mod-sandbox/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('mod-sandbox/tests/helpers/start-app', ['exports', 'ember', 'mod-sandbox/app', 'mod-sandbox/config/environment'], function (exports, _ember, _modSandboxApp, _modSandboxConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _modSandboxConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _modSandboxApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('mod-sandbox/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('mod-sandbox/tests/mixins/shared-actions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/shared-actions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/shared-actions.js should pass jshint.');
  });
});
define('mod-sandbox/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('mod-sandbox/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/column-mapping/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/column-mapping/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/column-mapping/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/column-mapping/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/column-mapping/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/column-mapping/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/contact/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/contact/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'submit/contact/controller.js should pass jshint.\nsubmit/contact/controller.js: line 9, col 34, Missing semicolon.\n\n1 error');
  });
});
define('mod-sandbox/tests/submit/contact/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/contact/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/contact/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/data/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/data/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/data/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/data/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/data/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/data/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/intro/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/intro/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/intro/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/intro/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/intro/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/intro/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/license/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/license/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/license/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/license/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/license/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/license/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/review/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/review/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/review/controller.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/review/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/review/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/review/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/source/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/source/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/source/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/submit/success/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | submit/success/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'submit/success/route.js should pass jshint.');
  });
});
define('mod-sandbox/tests/test-helper', ['exports', 'mod-sandbox/tests/helpers/resolver', 'ember-qunit'], function (exports, _modSandboxTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_modSandboxTestsHelpersResolver['default']);
});
define('mod-sandbox/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/mixins/shared-actions-test', ['exports', 'ember', 'mod-sandbox/mixins/shared-actions', 'qunit'], function (exports, _ember, _modSandboxMixinsSharedActions, _qunit) {

  (0, _qunit.module)('Unit | Mixin | shared actions');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var SharedActionsObject = _ember['default'].Object.extend(_modSandboxMixinsSharedActions['default']);
    var subject = SharedActionsObject.create();
    assert.ok(subject);
  });
});
define('mod-sandbox/tests/unit/mixins/shared-actions-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/shared-actions-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/shared-actions-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/column-mapping/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/column-mapping', 'Unit | Controller | submit/column mapping', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/column-mapping/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/column-mapping/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/column-mapping/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/column-mapping/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/column-mapping', 'Unit | Route | submit/column mapping', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/column-mapping/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/column-mapping/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/column-mapping/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/contact/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/contact', 'Unit | Controller | submit/contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/contact/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/contact/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/contact/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/contact/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/contact', 'Unit | Route | submit/contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/contact/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/contact/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/contact/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit', 'Unit | Controller | submit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/data/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/data', 'Unit | Controller | submit/data', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/data/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/data/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/data/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/data/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/data', 'Unit | Route | submit/data', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/data/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/data/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/data/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/intro/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/intro', 'Unit | Controller | submit/intro', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/intro/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/intro/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/intro/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/intro/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/intro', 'Unit | Route | submit/intro', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/intro/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/intro/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/intro/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/license/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/license', 'Unit | Controller | submit/license', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/license/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/license/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/license/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/license/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/license', 'Unit | Route | submit/license', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/license/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/license/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/license/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/review/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:submit/review', 'Unit | Controller | submit/review', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('mod-sandbox/tests/unit/submit/review/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/review/controller-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/review/controller-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/review/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/review', 'Unit | Route | submit/review', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/review/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/review/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/review/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit', 'Unit | Route | submit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/source/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/source', 'Unit | Route | submit/source', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/source/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/source/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/source/route-test.js should pass jshint.');
  });
});
define('mod-sandbox/tests/unit/submit/success/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:submit/success', 'Unit | Route | submit/success', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('mod-sandbox/tests/unit/submit/success/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/submit/success/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/submit/success/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('mod-sandbox/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
