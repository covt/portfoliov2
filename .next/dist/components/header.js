'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/chris/Dev/portfolio/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/chris/Dev/portfolio/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Link = require('next/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        'style',
        null,
        '\n        .container {\n          padding-left: 1em;\n          padding-right: 1em;\n          max-width: 1260px;\n          margin: 0 auto;\n        }\n        body {\n          font-family: Helvetica, sans-serif;\n          font-weight: 300;\n          font-size: 1.05em;\n        }\n        section {\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n        }\n        article {\n          flex-basis: 100%;\n          margin-bottom: 1em;\n        }\n        article p {\n          line-height: 1.5em;\n        }\n        @media screen and (min-width: 540px) {\n          ._25 {\n            flex: 2.5;\n          }\n          ._33 {\n            flex: 3.3;\n          }\n          ._66 {\n            flex: 6.6;\n          }\n        }\n        .left {\n          margin-right: .5em;\n        }\n        .right {\n          margin-left: .5em; \n        }\n        .fill {\n          overflow: hidden;\n          background-size: cover;\n          background-position: center;\n          background-image: url(http://placehold.it/1260x400);\n          min-height: 220px;\n        }\n        .projectTile {\n          border: 4px solid #fff;\n          border-radius: 3px;\n          box-shadow: 0px 0px 1px #000000;\n        }\n        .headerLink {\n          text-decoration: none;\n          color: blue;\n        }\n        .headerLinks {\n        }\n        .headerLinks ul li {\n          display: inline;\n          list-style-type: none;\n        }\n        .headerLinks ul {\n          padding: 0;\n          margin: 2em 0 2em 0;\n        }\n        .headerLinks li {\n          text-transform: uppercase;\n          font-weight: 300;\n          margin: 1em 1em 1em 0;\n        }\n        .hero {\n          font-weight: 300;\n          height: 400px;\n          align-items: center;\n          flex-direction: column;\n          display: flex;\n          justify-content: center;\n        }\n        .madeIn {\n          text-align: center;\n          font-weight: 300;\n          color: #333333;\n        }\n        .heart {\n          color: #ff3250;\n        }\n      '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'headerLinks' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Chris O\'Connell'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { href: '/' },
              _react2.default.createElement(
                'a',
                { className: 'headerLink' },
                'Home'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _Link2.default,
              { href: './resume' },
              _react2.default.createElement(
                'a',
                { className: 'headerLink' },
                'Resume'
              )
            )
          )
        )
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUNlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FERjtBQTRGRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxHQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGLFdBSkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxVQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGO0FBVEY7QUFERjtBQURGO0FBNUZGLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRGV2L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgYXJ0aWNsZSBwIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICAuXzI1IHtcbiAgICAgICAgICAgIGZsZXg6IDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLl8zMyB7XG4gICAgICAgICAgICBmbGV4OiAzLjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5fNjYge1xuICAgICAgICAgICAgZmxleDogNi42O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07IFxuICAgICAgICB9XG4gICAgICAgIC5maWxsIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vcGxhY2Vob2xkLml0LzEyNjB4NDAwKTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdFRpbGUge1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxpbmsge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyTGlua3Mge1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJMaW5rcyB1bCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyTGlua3MgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAyZW0gMCAyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyTGlua3MgbGkge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBtYXJnaW46IDFlbSAxZW0gMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWFkZUluIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgICAgICAuaGVhcnQge1xuICAgICAgICAgIGNvbG9yOiAjZmYzMjUwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlckxpbmtzJz4gICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ2hyaXMgTydDb25uZWxsXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdoZWFkZXJMaW5rJz5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9yZXN1bWUnPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2hlYWRlckxpbmsnPlJlc3VtZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKVxuIl19