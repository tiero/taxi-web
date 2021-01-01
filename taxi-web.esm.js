import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Button = function Button(props) {
  return React.createElement("button", {
    className: "button is-primary is-medium",
    onClick: props.onClick,
    disabled: props.disabled || false
  }, React.createElement("h1", {
    className: "title has-text-dark is-6"
  }, props.children));
};

var Button$1 = function Button(props) {
  return React.createElement("button", {
    className: "button is-dark is-medium",
    style: {
      border: 'none'
    },
    disabled: props.disabled || false,
    onClick: props.onClick
  }, React.createElement("h1", {
    className: "title is-6"
  }, props.children));
};

var taxiImage = /*#__PURE__*/require('./images/taxi.png');

var Layout = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Layout, _React$Component);

  function Layout() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;
    _this.state = {
      selected: 0
    };
    return _this;
  }

  var _proto = Layout.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var withTitle = this.props.title ? React.createElement("section", {
      className: "hero is-light"
    }, React.createElement("div", {
      className: "hero-body"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "columns"
    }, React.createElement("div", {
      className: "column has-text-centered"
    }, React.createElement("h1", {
      className: "title"
    }, this.props.title)))))) : null;
    var menu = this.props.menu && this.props.menu.map(function (m, i) {
      if (_this2.state.selected === i) return React.createElement("div", {
        key: i,
        className: "navbar-item"
      }, React.createElement(Button, null, m));
      return React.createElement("div", {
        key: i,
        className: "navbar-item"
      }, React.createElement(Button$1, {
        onClick: function onClick() {
          _this2.props.onMenuChange(i);

          _this2.setState({
            selected: i
          });
        }
      }, m));
    });
    return React.createElement("div", {
      style: {
        minHeight: '100vh',
        position: 'relative'
      }
    }, withTitle, React.createElement("nav", {
      className: "navbar is-dark",
      role: "navigation",
      "aria-label": "main navigation"
    }, React.createElement("div", {
      className: "navbar-brand ml-6"
    }, React.createElement("a", {
      className: "navbar-item",
      href: "https://liquid.taxi"
    }, React.createElement("img", {
      src: taxiImage,
      alt: "Liquid Taxi",
      style: {
        height: '48px'
      }
    }))), React.createElement("div", {
      className: "navbar-menu"
    }, React.createElement("div", {
      className: "navbar-end"
    }, menu))), React.createElement("div", {
      style: {
        paddingTop: '5rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingBottom: '5rem'
      }
    }, this.props.children), React.createElement("footer", {
      style: {
        position: 'absolute',
        bottom: 0,
        height: '5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, React.createElement("p", null, React.createElement("a", {
      href: "https://vulpem.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\xA9 2020 Vulpem Ventures OU"), " - ", React.createElement("a", {
      href: "https://alissadeleva.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Design by AD"))));
  };

  return Layout;
}(React.Component);

var TopupWithAsset = function TopupWithAsset() {
  var _useState = useState(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var onRequestClick = function onRequestClick(evt) {
    evt.preventDefault();
    setIsLoading(true);
    console.log(isLoading);
    setIsLoading(false);
  };

  return React.createElement("div", null, React.createElement("h1", {
    className: "title is-3 mt-6"
  }, "Top-up with Liquid Tether"), React.createElement("p", {
    className: "subtitle is-5 mt-3 mb-6"
  }, "1. Request a partial signed transaction. This includes Liquid Bitcoin for the fees ", React.createElement("br", null), "2. Import in your wallet and adds your USDt inputs and outputs", React.createElement("br", null), "3. Broadcats the final transaction to the network within 3 minutes.", ' ', React.createElement("br", null)), React.createElement("div", {
    className: "has-text-centered"
  }, React.createElement(Button, {
    onClick: onRequestClick
  }, "Request a Topup")));
};

var Topup = function Topup() {
  return React.createElement("h1", {
    className: "title has-text-centered mt-6"
  }, "Coming soon");
  /*return (
    <div>
      <h1 className="title is-3 mt-6">Top-up with Lightning Network</h1>
      <p className="subtitle is-5 mt-3 mb-6">
        1. Provide a transaction (PSET format) spending your Liquid assets{' '}
        <br />
        2. Pay the Lightning Network invoice <br />
        3. Once paid, we will add L-BTC fees on your behalf <br />
        4. Import the transaction in your wallet. It's ready to be signed
      </p>
      <InputWithButton
        buttonText="Top-up"
        onSubmit={() => console.log('clicked')}
      />
    </div>
  );*/
};

var Button$2 = function Button(props) {
  return React.createElement("button", {
    className: "button is-dark is-medium",
    style: {
      borderColor: '#fdfffc'
    },
    disabled: props.disabled || false,
    onClick: props.onClick
  }, React.createElement("h1", {
    className: "title is-6"
  }, props.children));
};

var Button$3 = function Button$1(props) {
  var _useState = useState(props.defaultIndex || 0),
      selected = _useState[0],
      setSelected = _useState[1];

  var onButtonClick = function onButtonClick(index) {
    // Do other stuff
    props.onChange(index);
    setSelected(index);
  };

  var buttons = props.values.map(function (v, index) {
    if (selected === index) return React.createElement(Button, {
      key: index
    }, v);
    return React.createElement(Button$2, {
      key: index,
      onClick: function onClick() {
        return onButtonClick(index);
      }
    }, v);
  });
  return React.createElement("div", {
    className: "buttons has-addons is-centered"
  }, buttons);
};

var taxiImage$1 = /*#__PURE__*/require('../images/taxi.png');

var Intro = function Intro() {
  return React.createElement("section", {
    className: "hero hero-body-padding-small is-medium"
  }, React.createElement("div", {
    className: "hero-body"
  }, React.createElement("div", {
    className: "columns"
  }, React.createElement("div", {
    className: "column pl-6"
  }, React.createElement("h1", {
    className: "title is-3 mt-6"
  }, "Liquid Taxi"), React.createElement("p", {
    className: "subtitle is-5 mt-3 mb-6"
  }, "Move around your Liquid assets without L-BTC. Pay per use with USDt or buy a prepaid package to get an API KEY")), React.createElement("div", {
    className: "column is-centered has-text-centered"
  }, React.createElement("img", {
    src: taxiImage$1,
    alt: "Liquid Taxi"
  })))));
};

var RADIO_VALUES = ['Pay with USDt', 'Use API KEY'];
var VIEW;

(function (VIEW) {
  VIEW[VIEW["ASSET"] = 1] = "ASSET";
  VIEW[VIEW["LN"] = 2] = "LN";
})(VIEW || (VIEW = {}));

var App = function App() {
  var _useState = useState(VIEW.ASSET),
      view = _useState[0],
      setView = _useState[1];

  var _useState2 = useState(''),
      error = _useState2[0],
      setError = _useState2[1];

  return React.createElement(Layout, {
    menu: ['Top-up']
  }, React.createElement(Intro, null), React.createElement("div", {
    className: "container"
  }, error.length > 0 && React.createElement("div", {
    className: "notification is-danger is-large"
  }, ' ', React.createElement("button", {
    className: "delete is-large",
    onClick: function onClick() {
      return setError('');
    }
  }), error), React.createElement("div", {
    className: "columns"
  }, React.createElement("div", {
    className: "column is-6-desktop is-offset-3-desktop"
  }, React.createElement(Button$3, {
    onChange: function onChange(i) {
      return setView(i + 1);
    },
    values: RADIO_VALUES
  }), view === VIEW.ASSET ? React.createElement(TopupWithAsset, {
    onError: function onError(msg) {
      return setError(msg);
    }
  }) : React.createElement(Topup, null)))));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=taxi-web.esm.js.map
