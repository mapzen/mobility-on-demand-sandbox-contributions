define("ember-bootstrap/templates/components/bs-modal", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 22,
                "column": 2
              }
            },
            "moduleName": "modules/ember-bootstrap/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["subexpr", "hash", [], ["header", ["subexpr", "component", ["bs-modal/header"], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [15, 50], [15, 55]]]]], [], []], "onClose", ["subexpr", "action", ["close"], [], ["loc", [null, [15, 64], [15, 80]]]]], ["loc", [null, [15, 15], [15, 81]]]], "body", ["subexpr", "component", ["bs-modal/body"], [], ["loc", [null, [16, 13], [16, 40]]]], "footer", ["subexpr", "component", ["bs-modal/footer"], ["onClose", ["subexpr", "action", ["close"], [], ["loc", [null, [17, 52], [17, 68]]]], "onSubmit", ["subexpr", "action", ["submit"], [], ["loc", [null, [17, 78], [17, 95]]]]], ["loc", [null, [17, 15], [17, 96]]]], "close", ["subexpr", "action", ["close"], [], ["loc", [null, [18, 14], [18, 30]]]], "submit", ["subexpr", "action", ["submit"], [], ["loc", [null, [19, 15], [19, 32]]]]], ["loc", [null, [14, 6], [20, 7]]]]], [], ["loc", [null, [13, 4], [21, 6]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 4
              },
              "end": {
                "line": 27,
                "column": 4
              }
            },
            "moduleName": "modules/ember-bootstrap/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [26, 38], [26, 42]]]], "fade"], [], ["loc", [null, [26, 33], [26, 51]]]], " ", ["subexpr", "if", [["get", "showModal", ["loc", [null, [26, 57], [26, 66]]]], ["get", "showClass", ["loc", [null, [26, 67], [26, 76]]]]], [], ["loc", [null, [26, 52], [26, 78]]]]]]], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [26, 86], [26, 96]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "modules/ember-bootstrap/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "bs-modal/dialog", [], ["onClose", ["subexpr", "action", ["close"], [], ["loc", [null, [4, 12], [4, 28]]]], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [5, 9], [5, 13]]]]], [], []], "showModal", ["subexpr", "@mut", [["get", "showModal", ["loc", [null, [6, 14], [6, 23]]]]], [], []], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [7, 7], [7, 14]]]]], [], []], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [9, 9], [9, 13]]]]], [], []], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [10, 18], [10, 31]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [11, 10], [11, 15]]]]], [], []]], 0, null, ["loc", [null, [3, 2], [22, 22]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [25, 10], [25, 22]]]]], [], 1, null, ["loc", [null, [25, 4], [27, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
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
            "line": 30,
            "column": 19
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-modal.hbs"
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
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-wormhole", "renderInPlace", ["subexpr", "@mut", [["get", "_renderInPlace", ["loc", [null, [1, 62], [1, 76]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [30, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});