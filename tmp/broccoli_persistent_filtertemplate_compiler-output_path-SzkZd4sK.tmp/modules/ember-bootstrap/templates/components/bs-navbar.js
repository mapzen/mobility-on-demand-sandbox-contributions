export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": false,
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 12,
          "column": 0
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-navbar.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["attribute","class",["subexpr","if",[["get","fluid",["loc",[null,[1,16],[1,21]]]],"container-fluid","container"],[],["loc",[null,[1,11],[1,53]]]]],
      ["inline","yield",[["subexpr","hash",[],["toggle",["subexpr","component",["bs-navbar/toggle"],["onClick",["subexpr","action",["toggleNavbar"],[],["loc",[null,[4,51],[4,74]]]],"collapsed",["subexpr","@mut",[["get","_collapsed",["loc",[null,[4,85],[4,95]]]]],[],[]]],["loc",[null,[4,13],[4,96]]]],"content",["subexpr","component",["bs-navbar/content"],["collapsed",["subexpr","@mut",[["get","_collapsed",["loc",[null,[5,55],[5,65]]]]],[],[]],"onHidden",["subexpr","@mut",[["get","onCollapsed",["loc",[null,[5,75],[5,86]]]]],[],[]],"onShown",["subexpr","@mut",[["get","onExpanded",["loc",[null,[5,95],[5,105]]]]],[],[]]],["loc",[null,[5,14],[5,106]]]],"nav",["subexpr","component",["bs-navbar/nav"],["linkToComponent",["subexpr","component",["bs-navbar/link-to"],["onCollapse",["subexpr","action",["collapse"],[],["loc",[null,[6,95],[6,114]]]]],["loc",[null,[6,53],[6,115]]]]],["loc",[null,[6,10],[6,116]]]],"collapse",["subexpr","action",["collapse"],[],["loc",[null,[7,15],[7,34]]]],"expand",["subexpr","action",["expand"],[],["loc",[null,[8,13],[8,30]]]]],["loc",[null,[3,4],[9,5]]]]],[],["loc",[null,[2,2],[10,4]]]]
    ],
    locals: [],
    templates: []
  };
}()));