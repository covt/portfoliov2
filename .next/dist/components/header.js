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
        '\n        main {\n          padding-left: 1em;\n          padding-right: 1em;\n          max-width: 1060px;\n          margin: 0 auto;\n        }\n        body {\n          font-family: Helvetica, sans-serif;\n          font-weight: 300;\n          font-size: 1.0em;\n        }\n        h1 {\n          font-size: 2em;\n        }\n        h2 {\n          font-size: 1.414em;\n        }\n        h3 {\n          font-size: 1.155;\n          font-weight: 300;\n          margin: 0;\n        }\n        h4 {\n          font-size: 1;\n        }\n        h5 {\n          font-size: 0.894;\n        }\n        h6 {\n          font-size: 0.816;\n        }\n        section {\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n          margin-bottom: 1em;\n        }\n        .resume {\n          flex: 0 0 100%;\n        }\n        .resume li {\n          margin-bottom: 1em;\n        }\n        article,\n        aside {\n          flex-basis: 100%;\n        }\n        article p,\n        li {\n          line-height: 1.5em;\n        }\n        @media screen and (min-width: 540px) {\n          aside {\n            flex: 2.5;\n          }\n          article {\n            flex: 7.5;\n          }\n        }\n        .left {\n          margin-right: .5em;\n        }\n        .right {\n          margin-left: .5em; \n        }\n        .fill {\n          overflow: hidden;\n          background-size: cover;\n          background-position: center;\n          background-image: url(http://placehold.it/1260x400);\n          min-height: 220px;\n        }\n        .projectTile {\n          border: 4px solid #fff;\n          border-radius: 3px;\n          box-shadow: 0px 0px 1px #000000;\n          margin-bottom: 1em;\n        }\n        .headerLink {\n          text-decoration: none;\n          color: blue;\n        }\n        .headerLinks {\n        }\n        .headerLinks ul li {\n          display: inline;\n          list-style-type: none;\n        }\n        .headerLinks ul {\n          padding: 0;\n          margin: 2em 0 2em 0;\n        }\n        .headerLinks li {\n          text-transform: uppercase;\n          font-weight: 300;\n          margin: 1em 1em 1em 0;\n        }\n        .hero {\n          font-weight: 300;\n          height: 400px;\n          align-items: center;\n          flex-direction: column;\n          display: flex;\n          justify-content: center;\n        }\n        .madeIn {\n          text-align: center;\n          font-weight: 300;\n          color: #333333;\n        }\n        .heart {\n          color: #ff3250;\n        }\n      '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUNlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FERjtBQXNIRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxHQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGLFdBSkY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sTUFBSyxVQUFYO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFERjtBQURGO0FBVEY7QUFERjtBQURGO0FBdEhGLEdBRGE7QUFBQSxDIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRGV2L3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDYwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNDE0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNTU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg5NDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjgxNjtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAucmVzdW1lIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucmVzdW1lIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYXJ0aWNsZSBwLFxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XG4gICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgZmxleDogMi41O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIGZsZXg6IDcuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtOyBcbiAgICAgICAgfVxuICAgICAgICAuZmlsbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3BsYWNlaG9sZC5pdC8xMjYweDQwMCk7XG4gICAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3RUaWxlIHtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDAwMDAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyTGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJMaW5rcyB7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlckxpbmtzIHVsIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJMaW5rcyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDJlbSAwIDJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJMaW5rcyBsaSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIG1hcmdpbjogMWVtIDFlbSAxZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5tYWRlSW4ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFydCB7XG4gICAgICAgICAgY29sb3I6ICNmZjMyNTA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0hlYWQ+XG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyTGlua3MnPiAgICAgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBDaHJpcyBPJ0Nvbm5lbGxcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2hlYWRlckxpbmsnPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPScuL3Jlc3VtZSc+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naGVhZGVyTGluayc+UmVzdW1lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIDwvaGVhZGVyPlxuKVxuIl19