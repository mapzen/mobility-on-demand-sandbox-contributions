define("mod-sandbox/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "moduleName": "mod-sandbox/templates/components/ui-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'tabindex');
        morphs[3] = dom.createAttrMorph(element0, 'checked');
        morphs[4] = dom.createAttrMorph(element0, 'disabled');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [2, 14], [2, 18]]]]], ["attribute", "tabindex", ["get", "tabindex", ["loc", [null, [3, 18], [3, 26]]]]], ["attribute", "checked", ["subexpr", "unbound", [["get", "checked", ["loc", [null, [4, 25], [4, 32]]]]], [], ["loc", [null, [4, 15], [4, 34]]]]], ["attribute", "disabled", ["subexpr", "unbound", [["get", "disabled", ["loc", [null, [5, 26], [5, 34]]]]], [], ["loc", [null, [5, 16], [5, 36]]]]], ["content", "label", ["loc", [null, [6, 7], [6, 16]]]], ["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [7, 8], [7, 26]]]]], [], ["loc", [null, [7, 0], [7, 28]]]]],
      locals: [],
      templates: []
    };
  })());
});