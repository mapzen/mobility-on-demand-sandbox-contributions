export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 4
          },
          "end": {
            "line": 5,
            "column": 4
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[4,6],[4,15]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 9,
          "column": 6
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox.hbs"
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
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","checkbox");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      morphs[2] = dom.createMorphAt(element0,3,3);
      morphs[3] = dom.createMorphAt(element0,5,5);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[1,14],[1,38]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[1,43],[1,73]]]]]]],
      ["block","component",[["get","labelComponent",["loc",[null,[3,17],[3,31]]]]],[],0,null,["loc",[null,[3,4],[5,18]]]],
      ["inline","component",[["get","errorsComponent",["loc",[null,[7,14],[7,29]]]]],[],["loc",[null,[7,2],[7,31]]]],
      ["inline","component",[["get","helpTextComponent",["loc",[null,[8,14],[8,31]]]]],[],["loc",[null,[8,2],[8,33]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));