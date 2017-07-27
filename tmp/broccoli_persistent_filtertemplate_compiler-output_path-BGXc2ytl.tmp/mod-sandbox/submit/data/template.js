export default Ember.HTMLBars.template((function() {
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
          "line": 36,
          "column": 6
        }
      },
      "moduleName": "mod-sandbox/submit/data/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" <div class=\"container\">\n	<div class=\"add-operator-info\">\n		<p>\n		Here's where you can add data.\n		</p>\n	</div>\n	<div class=\"headroom footroom center-text\">\n			{{#bs-button icon=\"glyphicon glyphicon-upload\" onClick=(action \"changeRoute\")}}Upload file{{/bs-button}}\n			{{#bs-button icon=\"glyphicon glyphicon-link\" onClick=(action \"changeRoute\")}}ArcGIS server link{{/bs-button}}\n			{{#bs-button icon=\"glyphicon glyphicon-link\" onClick=(action \"changeRoute\")}}Link to zip file{{/bs-button}}\n		</div>\n	<div class=\"pull-left\">\n{{#bs-button type=\"primary\" icon=\"glyphicon glyphicon-chevron-left\" onClick=(action \"changeRoute\" 'submit.intro')}}\n		  Back\n		{{/bs-button}}	</div>\n\n	<div class=\"pull-right\">\n{{#bs-button type=\"primary\" icon=\"glyphicon glyphicon-chevron-right\" onClick=(action \"changeRoute\" 'submit.license')}}\n		  Next\n		{{/bs-button}}	</div>\n</div> ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","ui text container");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      dom.setAttribute(el2,"class","first headroom");
      var el3 = dom.createTextNode("Add data");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n		Here's where you can add data.\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","column");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui two column stackable padded middle aligned centered color grid");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","column left aligned");
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","ui button yellow");
      var el6 = dom.createTextNode("Back");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","column right aligned");
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","ui button olive");
      var el6 = dom.createTextNode("Next");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2, 5, 1]);
      var element1 = dom.childAt(element0, [1, 0]);
      var element2 = dom.childAt(element0, [3, 0]);
      var morphs = new Array(2);
      morphs[0] = dom.createAttrMorph(element1, 'onClick');
      morphs[1] = dom.createAttrMorph(element2, 'onClick');
      return morphs;
    },
    statements: [
      ["attribute","onClick",["subexpr","action",["changeRoute","submit.intro"],[],["loc",[null,[32,77],[32,116]]]]],
      ["attribute","onClick",["subexpr","action",["changeRoute","submit.license"],[],["loc",[null,[33,77],[33,118]]]]]
    ],
    locals: [],
    templates: []
  };
}()));