define("ember-bootstrap/templates/components/bs-accordion", ["exports"], function (exports) {
  "use strict";

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
            "line": 6,
            "column": 2
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-accordion.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["item", ["subexpr", "component", ["bs-accordion/item"], ["selected", ["subexpr", "@mut", [["get", "isSelected", ["loc", [null, [3, 49], [3, 59]]]]], [], []], "onClick", ["subexpr", "action", ["change"], [], ["loc", [null, [3, 68], [3, 85]]]]], ["loc", [null, [3, 9], [3, 86]]]], "change", ["subexpr", "action", ["change"], [], ["loc", [null, [4, 11], [4, 28]]]]], ["loc", [null, [2, 2], [5, 3]]]]], [], ["loc", [null, [1, 0], [6, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});