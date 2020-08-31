"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expoStatusBar = require("expo-status-bar");

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ProductsViewScreen = _interopRequireDefault(require("./screens/ProductsViewScreen"));

var _ProductDetailScreen = _interopRequireDefault(require("./screens/ProductDetailScreen"));

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActivityProject = (0, _reactNavigationStack.createStackNavigator)({
  First: {
    screen: _ProductsViewScreen["default"]
  },
  Second: {
    screen: _ProductDetailScreen["default"]
  }
}, {
  initialRouteName: 'First'
});

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

var App = (0, _reactNavigation.createAppContainer)(ActivityProject);
var _default = App;
exports["default"] = _default;