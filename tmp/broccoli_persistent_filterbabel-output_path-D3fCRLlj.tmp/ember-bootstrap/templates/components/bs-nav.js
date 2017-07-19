define("ember-bootstrap/templates/components/bs-nav", ["exports"], function (exports) {
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
        "moduleName": "modules/ember-bootstrap/templates/components/bs-nav.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["item", ["subexpr", "component", [["get", "itemComponent", ["loc", [null, [3, 20], [3, 33]]]]], [], ["loc", [null, [3, 9], [3, 34]]]], "link-to", ["subexpr", "component", [["get", "linkToComponent", ["loc", [null, [4, 23], [4, 38]]]]], [], ["loc", [null, [4, 12], [4, 39]]]], "dropdown", ["subexpr", "component", [["get", "dropdownComponent", ["loc", [null, [5, 24], [5, 41]]]]], ["inNav", true], ["loc", [null, [5, 13], [5, 53]]]]], ["loc", [null, [2, 2], [6, 3]]]]], [], ["loc", [null, [1, 0], [7, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});