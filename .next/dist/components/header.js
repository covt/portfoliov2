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
        '\n        main {\n          padding-left: 1em;\n          padding-right: 1em;\n          max-width: 1060px;\n          margin: 0 auto;\n        }\n        body {\n          font-family: Helvetica, sans-serif;\n          font-weight: 300;\n          font-size: 1.0em;\n        }\n        h1 {\n          font-size: 2em;\n        }\n        h2 {\n          font-size: 1.414em;\n        }\n        h3 {\n          font-size: 1.155;\n        }\n        h4 {\n          font-size: 1;\n        }\n        h5 {\n          font-size: 0.894;\n        }\n        h6 {\n          font-size: 0.816;\n        }\n        section {\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n          margin-bottom: 1em;\n        }\n        article,\n        aside {\n          flex-basis: 100%;\n        }\n        article p {\n          line-height: 1.5em;\n        }\n        aside {\n          flex-basis: 100%;\n        }\n        @media screen and (min-width: 540px) {\n          aside {\n            flex: 2.5;\n          }\n          article {\n            flex: 7.5;\n          }\n          ._66 {\n            flex: 6.6;\n          }\n        }\n        .left {\n          margin-right: .5em;\n        }\n        .right {\n          margin-left: .5em; \n        }\n        .fill {\n          overflow: hidden;\n          background-size: cover;\n          background-position: center;\n          background-image: url(http://placehold.it/1260x400);\n          min-height: 220px;\n        }\n        .projectTile {\n          border: 4px solid #fff;\n          border-radius: 3px;\n          box-shadow: 0px 0px 1px #000000;\n          margin-bottom: 1em;\n        }\n        .headerLink {\n          text-decoration: none;\n          color: blue;\n        }\n        .headerLinks {\n        }\n        .headerLinks ul li {\n          display: inline;\n          list-style-type: none;\n        }\n        .headerLinks ul {\n          padding: 0;\n          margin: 2em 0 2em 0;\n        }\n        .headerLinks li {\n          text-transform: uppercase;\n          font-weight: 300;\n          margin: 1em 1em 1em 0;\n        }\n        .hero {\n          font-weight: 300;\n          height: 400px;\n          align-items: center;\n          flex-direction: column;\n          display: flex;\n          justify-content: center;\n        }\n        .madeIn {\n          text-align: center;\n          font-weight: 300;\n          color: #333333;\n        }\n        .heart {\n          color: #ff3250;\n        }\n      '
      )
    ),
    _react2.default.createElement(
      'main',
      null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUNlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FERjtBQW1IRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxHQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGLFdBSkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxVQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGO0FBVEY7QUFERjtBQURGO0FBbkhGLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRGV2L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNDE0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNTU7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg5NDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjgxNjtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBhcnRpY2xlLFxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhcnRpY2xlIHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgfVxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgICBmbGV4OiA3LjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5fNjYge1xuICAgICAgICAgICAgZmxleDogNi42O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07IFxuICAgICAgICB9XG4gICAgICAgIC5maWxsIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vcGxhY2Vob2xkLml0LzEyNjB4NDAwKTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdFRpbGUge1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJMaW5rIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxpbmtzIHtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyTGlua3MgdWwgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxpbmtzIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMmVtIDAgMmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxpbmtzIGxpIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMWVtIDFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1hZGVJbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYXJ0IHtcbiAgICAgICAgICBjb2xvcjogI2ZmMzI1MDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSGVhZD5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJMaW5rcyc+ICAgICBcbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENocmlzIE8nQ29ubmVsbFxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naGVhZGVyTGluayc+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vcmVzdW1lJz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdoZWFkZXJMaW5rJz5SZXN1bWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgPC9oZWFkZXI+XG4pXG4iXX0=