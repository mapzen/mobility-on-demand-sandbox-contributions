define("mod-sandbox/submit/license/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 10
          }
        },
        "moduleName": "mod-sandbox/submit/license/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <div class=\"container\">\n	<div class=\"add-operator-info\">\n		<p>\n		Here's where you can add license information.\n		</p>\n	</div>\n	<div class=\"pull-left\">\n{{#bs-button type=\"primary\" icon=\"glyphicon glyphicon-chevron-left\" onClick=(action \"changeRoute\" 'submit.data')}}\n		  Back\n		{{/bs-button}}	</div>\n\n	<div class=\"pull-right\">\n{{#bs-button type=\"primary\" icon=\"glyphicon glyphicon-chevron-right\" onClick=(action \"changeRoute\" 'submit.column-mapping')}}\n		  Next\n		{{/bs-button}}	</div>\n</div> ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});