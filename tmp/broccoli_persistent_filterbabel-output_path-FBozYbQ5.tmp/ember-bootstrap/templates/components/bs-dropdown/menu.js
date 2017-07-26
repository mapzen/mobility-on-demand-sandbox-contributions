define("ember-bootstrap/templates/components/bs-dropdown/menu", ["exports"], function (exports) {
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-dropdown/menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["item", ["subexpr", "component", ["bs-dropdown/menu/item"], [], ["loc", [null, [3, 9], [3, 44]]]], "link-to", ["subexpr", "component", ["bs-dropdown/menu/link-to"], [], ["loc", [null, [4, 12], [4, 50]]]], "divider", ["subexpr", "component", ["bs-dropdown/menu/divider"], [], ["loc", [null, [5, 12], [5, 50]]]]], ["loc", [null, [2, 2], [6, 3]]]]], [], ["loc", [null, [1, 0], [7, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});