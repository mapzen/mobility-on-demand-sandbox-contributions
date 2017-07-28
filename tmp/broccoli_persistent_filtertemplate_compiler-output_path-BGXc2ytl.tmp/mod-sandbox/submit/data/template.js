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
          "line": 31,
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
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),5,5);
      return morphs;
    },
    statements: [
      ["inline","nav-buttons",[],["sendChangeRoute","changeRoute","back","submit.intro","next","submit.license"],["loc",[null,[30,1],[30,88]]]]
    ],
    locals: [],
    templates: []
  };
}()));