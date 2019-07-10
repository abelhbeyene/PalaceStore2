webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      " About "
    ),
    " "
  );
};

exports.default = About;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { id: "blog-section" },
      _react2.default.createElement("img", { src: "/img/blogHero.svg", className: "blog-hero" }),
      _react2.default.createElement(
        "div",
        { className: "col-md-6 info" },
        _react2.default.createElement(
          "div",
          { className: "pro-wrapper insider" },
          _react2.default.createElement(
            "h1",
            null,
            "Ben Remeres"
          ),
          _react2.default.createElement(
            "h3",
            { className: "pro-header" },
            "R.I.P Ben Remeres"
          ),
          _react2.default.createElement(
            "div",
            { className: "pro-bio" },
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, qui eos in quod amet odit aliquam minima labore voluptates repellendus mollitia itaque, dolorem architecto quam quos. Cum assumenda et distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo et ipsum sunt repudiandae.",
            " ",
            _react2.default.createElement("br", null),
            " ",
            _react2.default.createElement("br", null),
            "Rerum praesentium vel consequatur magnam reprehenderit quam, illum quidem dignissimos ullam enim, mollitia ad nulla saepe nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, qui eos in quod amet odit aliquam minima labore voluptates repellendus mollitia itaque, dolorem architecto quam quos.Cum assumenda et distinctio.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quo et ipsum sunt repudiandae. ",
            _react2.default.createElement("br", null),
            " ",
            _react2.default.createElement("br", null),
            "Rerum praesentium vel consequatur magnam reprehenderit quam, illum quidem dignissimos ullam enim, mollitia ad nulla saepe nisi."
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col-md-6 model" },
        _react2.default.createElement("img", { src: "/img/Remeres.jpg", alt: "", className: "ben" })
      )
    )
  );
};

exports.default = Blog;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentArea = function (_Component) {
  _inherits(ContentArea, _Component);

  function ContentArea() {
    _classCallCheck(this, ContentArea);

    var _this = _possibleConstructorReturn(this, (ContentArea.__proto__ || Object.getPrototypeOf(ContentArea)).call(this));

    _this.state = {
      name: "Hermon"
    };
    return _this;
  }

  _createClass(ContentArea, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "content-area" },
        _react2.default.createElement(
          "div",
          { className: "col-md-6 model" },
          _react2.default.createElement("img", { src: "/img/decks.jpg" })
        ),
        _react2.default.createElement(
          "div",
          { className: "mocha-icons" },
          _react2.default.createElement("img", { src: "/img/mocha1.png", alt: "", className: "mochas" }),
          _react2.default.createElement("img", { src: "/img/mocha2.jpg", alt: "", className: "mochas" }),
          _react2.default.createElement("img", { src: "/img/mocha3.jpg", alt: "", className: "mochas" }),
          _react2.default.createElement("img", { src: "/img/mocha4.jpg", alt: "", className: "mochas" })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-6 info" },
          _react2.default.createElement(
            "div",
            { className: "insider" },
            _react2.default.createElement(
              "h5",
              null,
              "Decks"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "Hot Since 82"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Gastropub skateboard trust fund umami stumptown four loko. Coloring book vegan you probably haven't heard of tshem raw denim. Gentrify salvia plaid XOXO,quinoa neutra lumbersexual whatever DIY try-hard vice health goth vape leggings celiac. Ugh street art chillwave gastropub fam letterpress."
            ),
            _react2.default.createElement(
              "div",
              { className: "size" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "size"
              ),
              _react2.default.createElement(
                "ul",
                { className: "sizes" },
                _react2.default.createElement(
                  "li",
                  { className: "circle" },
                  "S"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "circle" },
                  "M"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "circle" },
                  "L"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "semi-circle" },
                  "XL"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "semi-circle" },
                  "XXL"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "semi-circle" },
                  "Custom"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "action-btns" },
              _react2.default.createElement(
                "a",
                { className: "col-md-6 red-hollow-btn" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "\xA3132"
                ),
                "Add to cart"
              ),
              _react2.default.createElement(
                "a",
                { className: "col-md-6 lightgrey-btn" },
                "Find A Store."
              )
            )
          )
        )
      );
    }
  }]);

  return ContentArea;
}(_react.Component);

exports.default = ContentArea;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "header",
    { id: "header" },
    _react2.default.createElement(
      "div",
      { className: "logo" },
      " 82 "
    ),
    _react2.default.createElement(
      "div",
      { className: "menu" },
      _react2.default.createElement(
        "section",
        { className: "color-1" },
        _react2.default.createElement(
          "nav",
          { className: "cl-effect-14" },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: "/" },
            " Home "
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: "./About" },
            " About "
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: "./Blog" },
            " Blog "
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: "./Products" },
            "Products"
          )
        )
      )
    )
  );
};

exports.default = Header;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Products = function Products() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      " products "
    ),
    " "
  );
};

exports.default = Products;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(111);

var _Header2 = _interopRequireDefault(_Header);

var _ContentArea = __webpack_require__(110);

var _ContentArea2 = _interopRequireDefault(_ContentArea);

var _Blog = __webpack_require__(109);

var _Blog2 = _interopRequireDefault(_Blog);

var _About = __webpack_require__(108);

var _About2 = _interopRequireDefault(_About);

var _Products = __webpack_require__(112);

var _Products2 = _interopRequireDefault(_Products);

var _reactRouterDom = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: "Hot 82"
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _ContentArea2.default, exact: true }),
              _react2.default.createElement(_reactRouterDom.Route, { path: "/Products", component: _Products2.default, exact: true }),
              _react2.default.createElement(_reactRouterDom.Route, { path: "/About", component: _About2.default, exact: true }),
              _react2.default.createElement(_reactRouterDom.Route, { path: "/Blog", component: _Blog2.default, exact: true }),
              _react2.default.createElement(_reactRouterDom.Route, { component: Error })
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("webAppRoot");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[116]);