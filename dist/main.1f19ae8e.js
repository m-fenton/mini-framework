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
})({"../minion/framework.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _render = _interopRequireDefault(require("./core/render"));
var _mount = _interopRequireDefault(require("./dom/mount"));
var _createVApp = require("./core/createVApp");
var _createElement = _interopRequireDefault(require("./core/createElement"));
var _handleEvent = require("./eventhandling/handleEvent");
var _registerEvent = require("./eventhandling/registerEvent");
var _routing = require("./routing/routing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Creates the framework object
var minion = {
  render: _render.default,
  mount: _mount.default,
  createVApp: _createVApp.createVApp,
  createElement: _createElement.default,
  handleEvent: _handleEvent.handleEvent,
  registerEvent: _registerEvent.registerEvent,
  routing: _routing.routing
};

// Export the whole framework as a single object
var _default = exports.default = minion;
},{}],"components/createListItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItem = void 0;
var _framework = _interopRequireDefault(require("../../minion/framework"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// creates an item for the toDoList
var createListItem = exports.createListItem = function createListItem(toDoString) {
  return _framework.default.createElement("li", {
    children: [_framework.default.createElement("div", {
      attrs: {
        class: "view"
      },
      children: [_framework.default.createElement("input", {
        attrs: {
          class: "toggle",
          type: "checkbox"
        }
      }), _framework.default.createElement("label", {
        attrs: {
          class: "label"
        },
        children: [toDoString]
      }), _framework.default.createElement("button", {
        attrs: {
          class: "destroy"
        }
      })]
    })]
  });
};
},{"../../minion/framework":"../minion/framework.js"}],"events/checkItemsCompleted.js":[function(require,module,exports) {
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
var _framework = _interopRequireDefault(require("../../minion/framework"));
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
    _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(_main.toDoList));
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
      _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(_main.toDoList));
    }
    ;
  }

  // Double checks number of active items when a new item is added
  (0, _checkItemsCompleted.checkItemsCompleted)();

  // rerunning minion.routing ensures that new active items are hidden if we're on the completed tab
  _framework.default.routing();
};
},{"../../minion/framework":"../minion/framework.js","../components/createListItem":"components/createListItem.js","./checkItemsCompleted":"events/checkItemsCompleted.js","../main":"main.js"}],"events/handleClickDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickDelete = void 0;
var _framework = _interopRequireDefault(require("../../minion/framework"));
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
    _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(toDoList));
  }
  (0, _checkItemsCompleted.checkItemsCompleted)();
};
},{"../../minion/framework":"../minion/framework.js","./checkItemsCompleted":"events/checkItemsCompleted.js"}],"events/handleClickToggleCompleted.js":[function(require,module,exports) {
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
var _framework = _interopRequireDefault(require("../../minion/framework"));
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
  _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(toDoList));

  // Select all checkboxes with class "toggle"
  var checkboxes = document.querySelectorAll('.toggle');

  // Iterate over each checkbox and set its `checked` property to false
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
};
},{"../../minion/framework":"../minion/framework.js"}],"events/handleClickToggleCompletedAll.js":[function(require,module,exports) {
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
},{}],"components/createInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _framework = _interopRequireDefault(require("../../minion/framework"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// creates input container for editing
var Input = exports.Input = function Input() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return _framework.default.createElement("div", {
    attrs: {
      class: "input-container"
    },
    children: [_framework.default.createElement("input", {
      attrs: {
        id: "todo-input",
        class: "new-todo",
        type: "text",
        placeholder: "What needs to be done?",
        value: defaultValue
      }
    }), _framework.default.createElement("label", {
      attrs: {
        class: "visually-hidden",
        for: "todo-input"
      }
      // children: ["New Todo Input"]
    })]
  });
};
},{"../../minion/framework":"../minion/framework.js"}],"events/handleDoubleClickEdit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDoubleClickEdit = void 0;
var _createInput = require("../components/createInput");
var _createListItem = require("../components/createListItem");
var _framework = _interopRequireDefault(require("../../minion/framework"));
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
    _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(toDoList));
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
        _framework.default.updateVApp.apply(_framework.default, _toConsumableArray(toDoList));
      };
    }
  }
};
},{"../components/createInput":"components/createInput.js","../components/createListItem":"components/createListItem.js","../../minion/framework":"../minion/framework.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDoList = exports.setVApp = exports.getVApp = exports.$rootEl = void 0;
exports.updateRootEl = updateRootEl;
var _framework = _interopRequireDefault(require("../minion/framework"));
var _handleEnterKeySubmit = require("./events/handleEnterKeySubmit");
var _handleClickDelete = require("./events/handleClickDelete");
var _handleClickToggleCompleted = require("./events/handleClickToggleCompleted");
var _handleClickClearCompleted = require("./events/handleClickClearCompleted");
var _handleClickToggleCompletedAll = require("./events/handleClickToggleCompletedAll");
var _handleDoubleClickEdit = require("./events/handleDoubleClickEdit");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Application State
var toDoList = exports.toDoList = [];
var $rootEl;
var vApp;

// Getters and Setters for Virtual DOM
var getVApp = exports.getVApp = function getVApp() {
  return vApp;
};
var setVApp = exports.setVApp = function setVApp(newVApp) {
  vApp = newVApp;
};

// Initialize Application
var initializeApp = function initializeApp() {
  setVApp(_framework.default.createVApp(toDoList)); // Create initial VApp
  exports.$rootEl = $rootEl = _framework.default.mount(_framework.default.render(vApp), document.getElementById('root')); // minion.mount the initial app

  // start up minion.routing functionality
  _framework.default.routing.apply(_framework.default, toDoList);

  // Register events
  // Keydown
  _framework.default.registerEvent('keydown', _handleEnterKeySubmit.handleEnterKeySubmit); // Keydown for Enter key to add items
  // Click
  _framework.default.registerEvent('click', function (event) {
    return (0, _handleClickDelete.handleClickDelete)(event, toDoList);
  });
  _framework.default.registerEvent('click', function (event) {
    return (0, _handleClickToggleCompleted.handleClickToggleCompleted)(event);
  });
  _framework.default.registerEvent('click', function (event) {
    return (0, _handleClickClearCompleted.handleClickClearCompleted)(event, toDoList);
  });
  _framework.default.registerEvent('click', function (event) {
    return (0, _handleClickToggleCompletedAll.handleClickToggleCompletedAll)(event);
  });
  // Double Click
  _framework.default.registerEvent('dblclick', function (event) {
    return (0, _handleDoubleClickEdit.handleDoubleClickEdit)(event, toDoList);
  }); // example double click event

  // Activate event handlers
  window.onkeydown = _framework.default.handleEvent; // Global event handler
  window.onclick = _framework.default.handleEvent; // Global event handler
  window.ondblclick = _framework.default.handleEvent; // Global event handler
};

// Update the root element in the DOM
function updateRootEl(newRootEl) {
  exports.$rootEl = $rootEl = newRootEl; // Update the reference
  var oldRoot = document.getElementById('root');
  if (oldRoot && oldRoot.parentNode) {
    oldRoot.parentNode.replaceChild($rootEl, oldRoot); // Replace the old root element with the new one
  } else {
    console.warn("Could not find old root element to replace");
  }
}

// Initialize the application
initializeApp();
},{"../minion/framework":"../minion/framework.js","./events/handleEnterKeySubmit":"events/handleEnterKeySubmit.js","./events/handleClickDelete":"events/handleClickDelete.js","./events/handleClickToggleCompleted":"events/handleClickToggleCompleted.js","./events/handleClickClearCompleted":"events/handleClickClearCompleted.js","./events/handleClickToggleCompletedAll":"events/handleClickToggleCompletedAll.js","./events/handleDoubleClickEdit":"events/handleDoubleClickEdit.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39019" + '/');
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