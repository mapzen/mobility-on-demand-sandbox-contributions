export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
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
          "column": 2
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-dropdown.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["button",["subexpr","component",["bs-dropdown/button"],["dropdown",["subexpr","@mut",[["get","this",["loc",[null,[3,52],[3,56]]]]],[],[]],"onClick",["subexpr","action",["toggleDropdown"],[],["loc",[null,[3,65],[3,90]]]]],["loc",[null,[3,11],[3,91]]]],"toggle",["subexpr","component",["bs-dropdown/toggle"],["dropdown",["subexpr","@mut",[["get","this",["loc",[null,[4,52],[4,56]]]]],[],[]],"inNav",["subexpr","@mut",[["get","inNav",["loc",[null,[4,63],[4,68]]]]],[],[]],"onClick",["subexpr","action",["toggleDropdown"],[],["loc",[null,[4,77],[4,102]]]]],["loc",[null,[4,11],[4,103]]]],"menu",["subexpr","component",["bs-dropdown/menu"],[],["loc",[null,[5,9],[5,39]]]],"isOpen",["get","isOpen",["loc",[null,[6,11],[6,17]]]]],["loc",[null,[2,2],[7,3]]]]],[],["loc",[null,[1,0],[8,2]]]]
    ],
    locals: [],
    templates: []
  };
}()));