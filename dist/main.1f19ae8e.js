// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../minion/core/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var renderElem = function renderElem() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null,
    tagName = _ref.tagName,
    attrs = _ref.attrs,
    children = _ref.children;
  // console.log("Rendering element:", tagName, attrs, children);
  // create the element
  //   e.g. <div></div>
  var $el = document.createElement(tagName);

  // add all attributs as specified in vNode.attrs
  //   e.g. <div id="app"></div>
  for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    $el.setAttribute(k, v);
  }

  // append all children as specified in vNode.children
  //   e.g. <div id="app"><img></div>
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      // console.log("Rendering child:", child);
      if (render(child) == null) {
        // console.log("Skipping null child");
        continue;
      }
      $el.appendChild(render(child));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return $el;
};
var render = function render(vNode) {
  // console.log("Rendering vNode:", vNode);
  if (vNode == null) {
    return;
  }
  if (typeof vNode === 'string') {
    // console.log("Rendering text node:", vNode);
    return document.createTextNode(vNode);
  }

  // we assume everything else to be a virtual element
  // console.log("Rendering element:", vNode);
  return renderElem(vNode);
};
var _default = exports.default = render;
},{}],"../minion/dom/mount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = function _default($node, $target) {
  $target.replaceWith($node);
  return $node;
};
},{}],"components/createInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// creates input container for editing
var Input = exports.Input = function Input() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return _minion.default.createElement("div", {
    attrs: {
      class: "input-container"
    },
    children: [_minion.default.createElement("input", {
      attrs: {
        id: "todo-input",
        class: "new-todo",
        type: "text",
        placeholder: "What needs to be done?",
        value: defaultValue
      }
    }), _minion.default.createElement("label", {
      attrs: {
        class: "visually-hidden",
        for: "todo-input"
      }
      // children: ["New Todo Input"]
    })]
  });
};
},{"../../minion/minion":"../minion/minion.js"}],"components/createHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
var _createInput = require("./createInput");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Function to create the footer element
var createHeader = exports.createHeader = function createHeader() {
  return _minion.default.createElement("header", {
    attrs: {
      class: "header"
    },
    children: [_minion.default.createElement("h1", {
      children: ["todos"]
    }), (0, _createInput.Input)()]
  });
};
},{"../../minion/minion":"../minion/minion.js","./createInput":"components/createInput.js"}],"components/createMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMain = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// creates the main section of the todo page; where the list goes
var createMain = exports.createMain = function createMain(toDoList) {
  return _minion.default.createElement("main", {
    attrs: {
      class: "main"
    },
    children: [_minion.default.createElement("div", {
      attrs: {
        class: "toggle-all-container"
      },
      // input and label are only shown when toDoList.length !== 0.
      children: toDoList.length == 0 ? [] : [_minion.default.createElement("input", {
        attrs: {
          class: "toggle-all",
          type: "checkbox"
        }
      }), _minion.default.createElement("label", {
        attrs: {
          class: "toggle-all-label",
          for: "toggle-all"
        }
      })]
    }), _minion.default.createElement("ul", {
      attrs: {
        class: "todo-list"
      },
      children: toDoList
    })]
  });
};
},{"../../minion/minion":"../minion/minion.js"}],"components/createFooter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFooter = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Function to create the footer element
var createFooter = exports.createFooter = function createFooter(count) {
  if (count < 1) {
    return null;
  }
  return _minion.default.createElement("footer", {
    attrs: {
      class: "footer"
    },
    children: [_minion.default.createElement("span", {
      attrs: {
        class: "todo-count"
      },
      children: ["".concat(count, " items left")] // Show the current count of toDoList items
    }), _minion.default.createElement("ul", {
      attrs: {
        class: "filters"
      },
      children: [_minion.default.createElement("li", {
        children: [_minion.default.createElement("a", {
          attrs: {
            class: "",
            href: "#/"
          },
          children: ["All"]
        }), _minion.default.createElement("a", {
          attrs: {
            class: "",
            href: "#/active"
          },
          children: ["Active"]
        }), _minion.default.createElement("a", {
          attrs: {
            class: "",
            href: "#/completed"
          },
          children: ["Completed"]
        })]
      })]
    }), _minion.default.createElement("button", {
      attrs: {
        class: "clear-completed"
        // disabled: "", // or remove this line if you want the button to be enabled
      },
      children: ["Clear completed"]
    })]
  });
};
},{"../../minion/minion":"../minion/minion.js"}],"../minion/core/createVApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVApp = void 0;
var _createHeader = require("../../app/components/createHeader");
var _createMain = require("../../app/components/createMain");
var _createFooter = require("../../app/components/createFooter");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var createVApp = exports.createVApp = function createVApp(toDoList) {
  return {
    tagName: 'div',
    attrs: {
      id: 'root',
      class: 'todoapp'
    },
    children: [(0, _createHeader.createHeader)(), (0, _createMain.createMain)(_toConsumableArray(toDoList))].concat(_toConsumableArray(toDoList.length > 0 ? [(0, _createFooter.createFooter)(toDoList.length)] : [])) //Only runs createFooter if toDoList has a length, this acts to hide the footer unless it's needed
  };
};
},{"../../app/components/createHeader":"components/createHeader.js","../../app/components/createMain":"components/createMain.js","../../app/components/createFooter":"components/createFooter.js"}],"../minion/core/createElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = function _default(tagName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$attrs = _ref.attrs,
    attrs = _ref$attrs === void 0 ? {} : _ref$attrs,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children;
  var vElem = Object.create(null);
  Object.assign(vElem, {
    tagName: tagName,
    attrs: attrs,
    children: children
  });
  return vElem;
};
},{}],"../minion/eventHandling/registerEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEvent = exports.eventRegistry = void 0;
var eventRegistry = exports.eventRegistry = {}; // Object to store event listeners

// Function to register events and their handlers
var registerEvent = exports.registerEvent = function registerEvent(eventType, handler) {
  if (!eventRegistry[eventType]) {
    eventRegistry[eventType] = []; // Initialize if not already initialized
  }
  eventRegistry[eventType].push(handler); // Store handler for the event type
};
},{}],"../minion/eventHandling/triggerEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerEvent = triggerEvent;
var _registerEvent = require("./registerEvent");
// Function to trigger events and run all associated handlers
function triggerEvent(eventType, event) {
  if (_registerEvent.eventRegistry[eventType]) {
    _registerEvent.eventRegistry[eventType].forEach(function (handler) {
      return handler(event);
    });
  }
}
;
},{"./registerEvent":"../minion/eventHandling/registerEvent.js"}],"../minion/eventHandling/handleEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEvent = void 0;
var _triggerEvent = require("./triggerEvent");
var handleEvent = exports.handleEvent = function handleEvent(event) {
  //  console.log(`Event triggered: ${event.type}`); // Log the event type
  var eventType = event.type; // Get event type (e.g., 'keydown')
  (0, _triggerEvent.triggerEvent)(eventType, event); // Trigger the event from our custom event system
};
},{"./triggerEvent":"../minion/eventHandling/triggerEvent.js"}],"../minion/routing/routing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routing = routing;
function routing() {
  // Function to check the current hash
  var checkHash = function checkHash() {
    // Get all the list items (this will be used in all cases)
    var todoListItems = document.querySelectorAll('.todo-list li');
    switch (window.location.hash) {
      case "#/":
        console.log("You are on the All route");

        // Show all list items
        todoListItems.forEach(function (item) {
          item.style.display = 'list-item'; // Restore the display for all items
        });
        break;
      case "#/active":
        console.log("You are on the Active route");

        // Show only items that don't have the class "completed"
        todoListItems.forEach(function (item) {
          if (item.classList.contains('completed')) {
            item.style.display = 'none'; // Hide completed items
          } else {
            item.style.display = 'list-item'; // Show active (non-completed) items
          }
        });
        break;
      case "#/completed":
        console.log("You are on the Completed route");

        // Show only items that have the class "completed"
        todoListItems.forEach(function (item) {
          if (item.classList.contains('completed')) {
            item.style.display = 'list-item'; // Show completed items
          } else {
            item.style.display = 'none'; // Hide active (non-completed) items
          }
        });
        break;
      default:
        console.log("Unknown route");
    }
  };

  // Initial check when the function is first called
  checkHash();

  // Assign the handler to the hashchange event directly
  window.onhashchange = checkHash;

  // If you're using history-based routing, handle popstate as well
  window.onpopstate = checkHash;
}
},{}],"../minion/core/setVApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vApp = exports.setVApp = void 0;
var vApp;
var setVApp = exports.setVApp = function setVApp(newVApp) {
  exports.vApp = vApp = newVApp;
};
},{}],"../minion/core/getVApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVApp = void 0;
var _setVApp = require("./setVApp");
var getVApp = exports.getVApp = function getVApp() {
  return _setVApp.vApp;
};
},{"./setVApp":"../minion/core/setVApp.js"}],"../minion/state/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$rootEl = void 0;
// Application State
var $rootEl;
},{}],"../minion/core/updateRootEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRootEl = updateRootEl;
// Update the root element in the DOM
function updateRootEl(newRootEl) {
  $rootEl = newRootEl; // Update the reference
  var oldRoot = document.getElementById('root');
  if (oldRoot && oldRoot.parentNode) {
    oldRoot.parentNode.replaceChild($rootEl, oldRoot); // Replace the old root element with the new one
  } else {
    console.warn("Could not find old root element to replace");
  }
}
},{}],"../minion/core/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _render = _interopRequireDefault(require("./render"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Helper function to zip two arrays together
var zip = function zip(xs, ys) {
  var zipped = [];
  for (var i = 0; i < Math.min(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
};

// Diffing attributes between two virtual DOM nodes
var diffAttrs = function diffAttrs(oldAttrs, newAttrs) {
  var patches = [];

  // Setting new or updated attributes
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    if (oldAttrs[k] !== v) {
      patches.push(function ($node) {
        $node.setAttribute(k, v);
        return $node;
      });
    }
  };
  for (var _i = 0, _Object$entries = Object.entries(newAttrs); _i < _Object$entries.length; _i++) {
    _loop();
  }

  // Removing old attributes that are not present in the new node
  var _loop2 = function _loop2(k) {
    if (!(k in newAttrs)) {
      patches.push(function ($node) {
        $node.removeAttribute(k);
        return $node;
      });
    }
  };
  for (var k in oldAttrs) {
    _loop2(k);
  }
  return function ($node) {
    for (var _i2 = 0, _patches = patches; _i2 < _patches.length; _i2++) {
      var patch = _patches[_i2];
      patch($node);
    }
    return $node;
  };
};

// Diffing children between two virtual DOM nodes
var diffChildren = function diffChildren(oldVChildren, newVChildren) {
  var childPatches = [];
  oldVChildren.forEach(function (oldVChild, i) {
    childPatches.push(diff(oldVChild, newVChildren[i]));
  });
  var additionalPatches = [];
  var _iterator = _createForOfIteratorHelper(newVChildren.slice(oldVChildren.length)),
    _step;
  try {
    var _loop3 = function _loop3() {
      var additionalVChild = _step.value;
      additionalPatches.push(function ($node) {
        $node.appendChild((0, _render.default)(additionalVChild));
        return $node;
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return function ($parent) {
    if (!$parent) {
      // If $parent is undefined, create a new element
      $parent = (0, _render.default)(newVChildren[0]);
    } else {
      // Applying child patches
      var _iterator2 = _createForOfIteratorHelper(zip(childPatches, $parent.childNodes)),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _patch = _step2$value[0],
            $child = _step2$value[1];
          if (_patch) {
            _patch($child);
          }
        }
        // Adding additional patches (new children)
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      for (var _i3 = 0, _additionalPatches = additionalPatches; _i3 < _additionalPatches.length; _i3++) {
        var patch = _additionalPatches[_i3];
        patch($parent);
      }
    }
    return $parent;
  };
};

// Main diff function to compute differences between old and new virtual DOM
var diff = function diff(oldVTree, newVTree) {
  // console.log("Diffing:", oldVTree, newVTree);
  if (oldVTree == null) {
    // Old tree is null or undefined; create a new node
    return function () {
      return (0, _render.default)(newVTree);
    };
  }
  if (!newVTree) {
    // New tree is undefined; remove the node
    return function ($node) {
      $node.remove();
      return undefined;
    };
  }
  if (typeof oldVTree === 'string' || typeof newVTree === 'string') {
    if (oldVTree !== newVTree) {
      return function ($node) {
        var $newNode = (0, _render.default)(newVTree);
        $node.replaceWith($newNode);
        return $newNode;
      };
    } else {
      return function ($node) {
        return $node;
      };
    }
  }
  if (oldVTree.tagName !== newVTree.tagName) {
    return function ($node) {
      var $newNode = (0, _render.default)(newVTree);
      $node.replaceWith($newNode);
      return $newNode;
    };
  }
  var patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
  var patchChildren = diffChildren(oldVTree.children, newVTree.children);
  return function ($node) {
    patchAttrs($node);
    patchChildren($node);
    return $node;
  };
};
var _default = exports.default = diff;
},{"./render":"../minion/core/render.js"}],"../minion/core/updateVApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVApp = updateVApp;
var _getVApp = require("./getVApp");
var _setVApp = require("./setVApp");
var _state = require("../state/state");
var _updateRootEl = require("./updateRootEl");
var _createVApp = require("./createVApp");
var _diff = _interopRequireDefault(require("./diff"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function updateVApp() {
  // Generate the new virtual DOM representation
  var currentVApp = (0, _getVApp.getVApp)();
  for (var _len = arguments.length, toDoList = new Array(_len), _key = 0; _key < _len; _key++) {
    toDoList[_key] = arguments[_key];
  }
  var vNewApp = (0, _createVApp.createVApp)([].concat(toDoList));

  // Calculate the difference and patch the DOM
  var patch = (0, _diff.default)(currentVApp, vNewApp);
  var newRootEl = patch(_state.$rootEl);

  // Update the root element and the virtual app state
  (0, _updateRootEl.updateRootEl)(newRootEl);
  (0, _setVApp.setVApp)(vNewApp);
}
},{"./getVApp":"../minion/core/getVApp.js","./setVApp":"../minion/core/setVApp.js","../state/state":"../minion/state/state.js","./updateRootEl":"../minion/core/updateRootEl.js","./createVApp":"../minion/core/createVApp.js","./diff":"../minion/core/diff.js"}],"../minion/minion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _render = _interopRequireDefault(require("./core/render"));
var _mount = _interopRequireDefault(require("./dom/mount"));
var _createVApp = require("./core/createVApp");
var _createElement = _interopRequireDefault(require("./core/createElement"));
var _handleEvent = require("./eventHandling/handleEvent");
var _registerEvent = require("./eventHandling/registerEvent");
var _routing = require("./routing/routing");
var _getVApp = require("./core/getVApp");
var _setVApp = require("./core/setVApp");
var _updateVApp = require("./core/updateVApp");
var _updateRootEl = require("./core/updateRootEl");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Creates the framework object
var minion = {
  render: _render.default,
  mount: _mount.default,
  createVApp: _createVApp.createVApp,
  getVApp: _getVApp.getVApp,
  setVApp: _setVApp.setVApp,
  updateVApp: _updateVApp.updateVApp,
  updateRootEl: _updateRootEl.updateRootEl,
  createElement: _createElement.default,
  registerEvent: _registerEvent.registerEvent,
  handleEvent: _handleEvent.handleEvent,
  routing: _routing.routing
};

// Export the whole framework as a single object
var _default = exports.default = minion;
},{"./core/render":"../minion/core/render.js","./dom/mount":"../minion/dom/mount.js","./core/createVApp":"../minion/core/createVApp.js","./core/createElement":"../minion/core/createElement.js","./eventHandling/handleEvent":"../minion/eventHandling/handleEvent.js","./eventHandling/registerEvent":"../minion/eventHandling/registerEvent.js","./routing/routing":"../minion/routing/routing.js","./core/getVApp":"../minion/core/getVApp.js","./core/setVApp":"../minion/core/setVApp.js","./core/updateVApp":"../minion/core/updateVApp.js","./core/updateRootEl":"../minion/core/updateRootEl.js"}],"components/createListItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItem = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// creates an item for the toDoList
var createListItem = exports.createListItem = function createListItem(toDoString) {
  return _minion.default.createElement("li", {
    children: [_minion.default.createElement("div", {
      attrs: {
        class: "view"
      },
      children: [_minion.default.createElement("input", {
        attrs: {
          class: "toggle",
          type: "checkbox"
        }
      }), _minion.default.createElement("label", {
        attrs: {
          class: "label"
        },
        children: [toDoString]
      }), _minion.default.createElement("button", {
        attrs: {
          class: "destroy"
        }
      })]
    })]
  });
};
},{"../../minion/minion":"../minion/minion.js"}],"events/checkItemsCompleted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkItemsCompleted = checkItemsCompleted;
function checkItemsCompleted() {
  var toDoCountElement = document.querySelector(".todo-count");
  var todoListItems = document.querySelectorAll('.todo-list li');
  todoListItems.forEach(function (item) {
    if (item.classList.contains('completed')) {
      var newNum = Number(toDoCountElement.textContent[0]) - 1;
      var newStr = newNum + " items left!";
      toDoCountElement.textContent = newStr;
    }
  });
}
},{}],"events/handleEnterKeySubmit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEnterKeySubmit = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
var _createListItem = require("../components/createListItem");
var _checkItemsCompleted = require("./checkItemsCompleted");
var _main = require("../main");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var handleEnterKeySubmit = exports.handleEnterKeySubmit = function handleEnterKeySubmit(event) {
  // Early return if the key pressed is not "Enter"
  if (event.key !== "Enter") return;
  var inputContainers = document.querySelectorAll('.input-container');
  // Check if there's only one input
  if (inputContainers.length == 1) {
    var input = inputContainers[0].querySelector('input');
    var todoInputValue = input.value.trim();
    // Early return if the input value is empty
    if (!todoInputValue) return;
    var toDoItem = (0, _createListItem.createListItem)(todoInputValue);
    _main.toDoList.push(toDoItem);

    // minion.updateVApp
    _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(_main.toDoList));
    input.value = "";
  }
  if (inputContainers.length == 2) {
    var secondInputContainer = inputContainers[1]; // The second input is at index 1

    // Find the child input element within the second input
    var _input = secondInputContainer.querySelector('input');
    if (_input) {
      var index = _main.toDoList.findIndex(function (item) {
        return item.tagName === "div";
      });
      _main.toDoList[index] = (0, _createListItem.createListItem)(_input.value);
      _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(_main.toDoList));
    }
    ;
  }

  // Double checks number of active items when a new item is added
  (0, _checkItemsCompleted.checkItemsCompleted)();

  // rerunning minion.routing ensures that new active items are hidden if we're on the completed tab
  _minion.default.routing();
};
},{"../../minion/minion":"../minion/minion.js","../components/createListItem":"components/createListItem.js","./checkItemsCompleted":"events/checkItemsCompleted.js","../main":"main.js"}],"events/handleClickDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickDelete = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
var _checkItemsCompleted = require("./checkItemsCompleted");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var handleClickDelete = exports.handleClickDelete = function handleClickDelete(event, toDoList) {
  if (!event.target.classList.contains("destroy")) {
    return;
  }
  var listItem = event.target.closest('li');
  if (listItem) {
    // Get all li elements
    var allItems = Array.from(listItem.parentNode.children);

    // Find the index of the clicked item
    var index = allItems.indexOf(listItem);

    // Check if the index is within the bounds of the array
    if (index >= 0 && index < toDoList.length) {
      // Use splice to remove the entry at the specific index
      toDoList.splice(index, 1);
      console.log(toDoList);
    }
    // This cheeky line solves a bug where the completed class was
    // incorrectly getting applied to the next item on the list
    listItem.remove();
    _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(toDoList));
  }
  (0, _checkItemsCompleted.checkItemsCompleted)();
};
},{"../../minion/minion":"../minion/minion.js","./checkItemsCompleted":"events/checkItemsCompleted.js"}],"events/handleClickToggleCompleted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickToggleCompleted = void 0;
var handleClickToggleCompleted = exports.handleClickToggleCompleted = function handleClickToggleCompleted(event) {
  if (!event.target.classList.contains("toggle")) {
    return;
  }
  var toDoCountElement = document.querySelector(".todo-count");
  var listItem = event.target.closest('li');
  if (listItem) {
    if (!listItem.classList.contains("completed")) {
      listItem.classList.add("completed");
      var newNum = Number(toDoCountElement.textContent[0]) - 1;
      var newStr = newNum + " items left!";
      toDoCountElement.textContent = newStr;
    } else {
      listItem.classList.remove("completed");
      var _newNum = Number(toDoCountElement.textContent[0]) + 1;
      var _newStr = _newNum + " items left!";
      toDoCountElement.textContent = _newStr;
    }
  }
};
},{}],"events/handleClickClearCompleted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickClearCompleted = void 0;
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var handleClickClearCompleted = exports.handleClickClearCompleted = function handleClickClearCompleted(event, toDoList) {
  if (!event.target.classList.contains("clear-completed")) {
    return;
  }
  // Select all <li> elements inside the <ul> with the class "todo-list"
  var todoListItems = document.querySelectorAll('.todo-list li');

  // Initialize an empty array to store the indices of completed items
  var completedItemIndices = [];

  // Loop through each <li> element
  todoListItems.forEach(function (item, index) {
    // Check if the item has the class "completed"
    if (item.classList.contains('completed')) {
      // If it does, push the index to the array
      completedItemIndices.push(index);
      item.classList.remove("completed");
    }
  });

  // Sort the completed indices in descending order
  // This is important to avoid index shifts when removing items
  completedItemIndices.sort(function (a, b) {
    return b - a;
  });

  // Remove items from toDoList based on the indices in completedItemIndices
  completedItemIndices.forEach(function (index) {
    toDoList.splice(index, 1);
  });

  // Log the array of indices to the console
  _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(toDoList));

  // Select all checkboxes with class "toggle"
  var checkboxes = document.querySelectorAll('.toggle');

  // Iterate over each checkbox and set its `checked` property to false
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
};
},{"../../minion/minion":"../minion/minion.js"}],"events/handleClickToggleCompletedAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickToggleCompletedAll = void 0;
var handleClickToggleCompletedAll = exports.handleClickToggleCompletedAll = function handleClickToggleCompletedAll(event) {
  // Check if the click event is on the button or label with class "toggle-all-label"
  if (!event.target.classList.contains("toggle-all-label")) {
    return; // Exit if the click is not on the relevant button/label
  }

  // Select all <li> elements inside the <ul> with the class "todo-list"
  var todoListItems = document.querySelectorAll('.todo-list li');

  // Determine if all items have the class "completed"
  var allCompleted = Array.from(todoListItems).every(function (item) {
    return item.classList.contains('completed');
  });

  // Select all checkboxes within the todo list
  var checkboxes = document.querySelectorAll('.toggle');

  // If all items are completed, remove the "completed" class from all
  if (allCompleted) {
    todoListItems.forEach(function (item) {
      return item.classList.remove('completed');
    });
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false; // Uncheck all checkboxes
    });
  } else {
    // Otherwise, add the "completed" class to all items
    todoListItems.forEach(function (item) {
      return item.classList.add('completed');
    });
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true; // Check all checkboxes
    });
  }
};
},{}],"events/handleDoubleClickEdit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDoubleClickEdit = void 0;
var _createInput = require("../components/createInput");
var _createListItem = require("../components/createListItem");
var _minion = _interopRequireDefault(require("../../minion/minion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var handleDoubleClickEdit = exports.handleDoubleClickEdit = function handleDoubleClickEdit(event, toDoList) {
  var index;
  if (!event.target.classList.contains("label")) {
    return;
  }
  var listItem = event.target.closest('li');
  if (listItem) {
    // listItem.classList.add("editing")
    //  Get all li elements
    var allItems = Array.from(listItem.parentNode.children);

    // Find the index of the clicked item
    index = allItems.indexOf(listItem);

    //    Check if the index is within the bounds of the array
    if (index >= 0 && index < toDoList.length) {
      // Use splice to remove the entry at the specific index
      toDoList[index] = (0, _createInput.Input)(listItem.textContent);
      console.log("toDoList", toDoList);
    }
    _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(toDoList));
  }
  // Now find all input elements inside the list item
  var inputContainers = document.querySelectorAll('.input-container');
  // Check if there are at least two inputs and select the second one
  if (inputContainers.length >= 2) {
    var secondInputContainers = inputContainers[1]; // The second input is at index 1

    // Find the child input element within the second input
    var input = secondInputContainers.querySelector('input');
    if (input) {
      input.focus(); // Focus on the child input field
      input.select(); // Select all text in the child input field
      input.onblur = function () {
        toDoList[index] = (0, _createListItem.createListItem)(input.value);
        _minion.default.updateVApp.apply(_minion.default, _toConsumableArray(toDoList));
      };
    }
  }
};
},{"../components/createInput":"components/createInput.js","../components/createListItem":"components/createListItem.js","../../minion/minion":"../minion/minion.js"}],"components/createToDoApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vToDoApp = void 0;
var _createHeader = require("../../app/components/createHeader");
var _createMain = require("../../app/components/createMain");
var _createFooter = require("../../app/components/createFooter");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var vToDoApp = exports.vToDoApp = function vToDoApp(toDoList) {
  return {
    tagName: 'div',
    attrs: {
      id: 'root',
      class: 'todoapp'
    },
    children: [(0, _createHeader.createHeader)(), (0, _createMain.createMain)(_toConsumableArray(toDoList))].concat(_toConsumableArray(toDoList.length > 0 ? [(0, _createFooter.createFooter)(toDoList.length)] : [])) //Only runs createFooter if toDoList has a length, this acts to hide the footer unless it's needed
  };
};
},{"../../app/components/createHeader":"components/createHeader.js","../../app/components/createMain":"components/createMain.js","../../app/components/createFooter":"components/createFooter.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDoList = void 0;
var _minion = _interopRequireDefault(require("../minion/minion"));
var _handleEnterKeySubmit = require("./events/handleEnterKeySubmit");
var _handleClickDelete = require("./events/handleClickDelete");
var _handleClickToggleCompleted = require("./events/handleClickToggleCompleted");
var _handleClickClearCompleted = require("./events/handleClickClearCompleted");
var _handleClickToggleCompletedAll = require("./events/handleClickToggleCompletedAll");
var _handleDoubleClickEdit = require("./events/handleDoubleClickEdit");
var _createToDoApp = require("./components/createToDoApp");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var $rootEl;
var toDoList = exports.toDoList = [];
// Initialize Application
var initializeApp = function initializeApp() {
  var vApp = (0, _createToDoApp.vToDoApp)(toDoList);
  var $rootElement = document.getElementById('root');
  // minion.setVApp(vApp); // Create initial VApp
  _minion.default.mount(_minion.default.render(vApp), $rootElement); // minion.mount the initial app

  // start up minion.routing functionality
  _minion.default.routing.apply(_minion.default, toDoList);

  // Register events
  // Keydown
  _minion.default.registerEvent('keydown', _handleEnterKeySubmit.handleEnterKeySubmit); // Keydown for Enter key to add items
  // Click
  _minion.default.registerEvent('click', function (event) {
    return (0, _handleClickDelete.handleClickDelete)(event, toDoList);
  });
  _minion.default.registerEvent('click', function (event) {
    return (0, _handleClickToggleCompleted.handleClickToggleCompleted)(event);
  });
  _minion.default.registerEvent('click', function (event) {
    return (0, _handleClickClearCompleted.handleClickClearCompleted)(event, toDoList);
  });
  _minion.default.registerEvent('click', function (event) {
    return (0, _handleClickToggleCompletedAll.handleClickToggleCompletedAll)(event);
  });
  // Double Click
  _minion.default.registerEvent('dblclick', function (event) {
    return (0, _handleDoubleClickEdit.handleDoubleClickEdit)(event, toDoList);
  }); // example double click event

  // Activate event handlers
  window.onkeydown = _minion.default.handleEvent; // Global event handler
  window.onclick = _minion.default.handleEvent; // Global event handler
  window.ondblclick = _minion.default.handleEvent; // Global event handler
};

// Initialize the application
initializeApp();
},{"../minion/minion":"../minion/minion.js","./events/handleEnterKeySubmit":"events/handleEnterKeySubmit.js","./events/handleClickDelete":"events/handleClickDelete.js","./events/handleClickToggleCompleted":"events/handleClickToggleCompleted.js","./events/handleClickClearCompleted":"events/handleClickClearCompleted.js","./events/handleClickToggleCompletedAll":"events/handleClickToggleCompletedAll.js","./events/handleDoubleClickEdit":"events/handleDoubleClickEdit.js","./components/createToDoApp":"components/createToDoApp.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34925" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map