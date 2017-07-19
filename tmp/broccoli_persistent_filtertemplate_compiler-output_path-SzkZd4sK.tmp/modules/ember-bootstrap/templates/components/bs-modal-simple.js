export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 4
              }
            },
            "moduleName": "modules/ember-bootstrap/templates/components/bs-modal-simple.hbs"
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
            ["inline","yield",[["subexpr","hash",[],["close",["subexpr","action",["close"],[],["loc",[null,[17,16],[17,32]]]],"submit",["subexpr","action",["submit"],[],["loc",[null,[18,17],[18,34]]]]],["loc",[null,[16,8],[19,9]]]]],[],["loc",[null,[15,6],[20,8]]]]
          ],
          locals: [],
          templates: []
        };
      }());
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
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "modules/ember-bootstrap/templates/components/bs-modal-simple.hbs"
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-modal/header",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[13,28],[13,33]]]]],[],[]],"closeButton",["subexpr","@mut",[["get","closeButton",["loc",[null,[13,46],[13,57]]]]],[],[]],"onClose",["subexpr","action",["close"],[],["loc",[null,[13,66],[13,82]]]]],["loc",[null,[13,4],[13,84]]]],
          ["block","bs-modal/body",[],[],0,null,["loc",[null,[14,4],[21,22]]]],
          ["inline","bs-modal/footer",[],["closeTitle",["subexpr","@mut",[["get","closeTitle",["loc",[null,[22,33],[22,43]]]]],[],[]],"submitTitle",["subexpr","@mut",[["get","submitTitle",["loc",[null,[22,56],[22,67]]]]],[],[]],"onClose",["subexpr","action",["close"],[],["loc",[null,[22,76],[22,92]]]],"onSubmit",["subexpr","action",["submit"],[],["loc",[null,[22,102],[22,119]]]]],["loc",[null,[22,4],[22,121]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 4
            }
          },
          "moduleName": "modules/ember-bootstrap/templates/components/bs-modal-simple.hbs"
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
        statements: [
          ["attribute","class",["concat",["modal-backdrop ",["subexpr","if",[["get","fade",["loc",[null,[27,38],[27,42]]]],"fade"],[],["loc",[null,[27,33],[27,51]]]]," ",["subexpr","if",[["get","showModal",["loc",[null,[27,57],[27,66]]]],["get","showClass",["loc",[null,[27,67],[27,76]]]]],[],["loc",[null,[27,52],[27,78]]]]]]],
          ["attribute","id",["concat",[["get","backdropId",["loc",[null,[27,86],[27,96]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type",
            "multiple-nodes"
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
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-modal-simple.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
        return morphs;
      },
      statements: [
        ["block","bs-modal/dialog",[],["onClose",["subexpr","action",["close"],[],["loc",[null,[4,12],[4,28]]]],"fade",["subexpr","@mut",[["get","fade",["loc",[null,[5,9],[5,13]]]]],[],[]],"showModal",["subexpr","@mut",[["get","showModal",["loc",[null,[6,14],[6,23]]]]],[],[]],"id",["subexpr","@mut",[["get","modalId",["loc",[null,[7,7],[7,14]]]]],[],[]],"keyboard",["subexpr","@mut",[["get","keyboard",["loc",[null,[8,13],[8,21]]]]],[],[]],"size",["subexpr","@mut",[["get","size",["loc",[null,[9,9],[9,13]]]]],[],[]],"backdropClose",["subexpr","@mut",[["get","backdropClose",["loc",[null,[10,18],[10,31]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[11,10],[11,15]]]]],[],[]]],0,null,["loc",[null,[3,2],[23,22]]]],
        ["block","if",[["get","showBackdrop",["loc",[null,[26,10],[26,22]]]]],[],1,null,["loc",[null,[26,4],[28,11]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
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
          "line": 31,
          "column": 19
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-modal-simple.hbs"
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
      ["block","ember-wormhole",[],["to","ember-bootstrap-wormhole","renderInPlace",["subexpr","@mut",[["get","_renderInPlace",["loc",[null,[1,62],[1,76]]]]],[],[]]],0,null,["loc",[null,[1,0],[31,19]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));