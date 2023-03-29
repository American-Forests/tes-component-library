import React from 'react';
import { MinusIcon, PlusIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { Accordion as Accordion$1, AccordionItem as AccordionItem$1 } from '@szhsin/react-accordion';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["header", "variant", "nested"];
var AccordionItem = function AccordionItem(_ref) {
  var _header = _ref.header,
    variant = _ref.variant,
    nested = _ref.nested,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement(AccordionItem$1, Object.assign({}, rest, {
    header: function header(_ref2) {
      var isEnter = _ref2.state.isEnter;
      return React.createElement("div", {
        className: "text-brand-green-dark justify-between items-center border-b-brand-green rounded-sm flex flex-row w-full h-full p-4 \n        " + (variant === 'secondary' && 'text-sm') + "\n        " + (nested && "text-[#333335] text-sm font-semibold") + "\n      "
      }, _header, variant === 'primary' && !nested && React.createElement("div", {
        className: 'flex text-brand-green justify-center items-center border-brand-green border-2 w-4 h-4 rounded-sm'
      }, isEnter ? React.createElement(MinusIcon, null) : React.createElement(PlusIcon, null)), (variant === 'secondary' || nested) && React.createElement("div", {
        className: "text-brand-green w-4 h-4 transition-transform duration-200 ease-in-out " + (isEnter && "rotate-180")
      }, React.createElement(ChevronDownIcon, null)));
    },
    className: "\n      border-b-[3px] border-b-brand-green justify-between\n      " + (variant === 'secondary' && 'border-b border-b-[#E0E0E0]') + "\n      " + (nested && "border-b-[0px] border-t border-t-slant-200") + "\n    ",
    buttonProps: {
      className: 'text-brand-green-dark justify-between items-center border-none border-b-brand-green flex flex-row w-full hover:bg-brand-green hover:bg-opacity-5'
    },
    contentProps: {
      className: "transition-height duration-200 ease-in-out"
    },
    panelProps: {
      className: "p-0"
    }
  }));
};
var Accordion = function Accordion(_ref3) {
  var items = _ref3.items,
    variant = _ref3.variant;
  return React.createElement(Accordion$1, {
    transition: true,
    transitionTimeout: 200
  }, items && items.map(function (item) {
    var _item$elements, _item$content, _item$content2;
    return item.type === "accordion" ? React.createElement(AccordionItem, {
      header: item.header,
      variant: variant
    }, (_item$elements = item.elements) == null ? void 0 : _item$elements.map(function (element) {
      var _element$content;
      return React.createElement(Accordion$1, {
        transition: true,
        transitionTimeout: 200
      }, React.createElement(AccordionItem, {
        header: element.header,
        nested: true
      }, (_element$content = element.content) == null ? void 0 : _element$content.map(function (c) {
        return React.createElement("p", {
          className: "text-sm pl-6 my-4 text-gray-600 " + c.style
        }, c.text);
      })));
    })) : item.type === "list" ? React.createElement(AccordionItem, {
      header: item.header,
      variant: variant
    }, item.overview && React.createElement("p", {
      className: "pl-4 py-4 text-sm text-gray-600"
    }, item.overview), React.createElement("ol", {
      className: "pl-4"
    }, (_item$content = item.content) == null ? void 0 : _item$content.map(function (c, index) {
      return React.createElement("li", {
        className: "pb-4 " + c.style
      }, React.createElement("div", {
        className: "w-5 h-5 font-semibold text-sm rounded-full inline-block mr-2 text-center bg-brand-green bg-opacity-20"
      }, index + 1), React.createElement("span", {
        className: "text-sm text-gray-600"
      }, c.text));
    }))) : React.createElement(AccordionItem, {
      header: item.header,
      variant: variant
    }, (_item$content2 = item.content) == null ? void 0 : _item$content2.map(function (c) {
      return React.createElement("p", {
        className: c.style
      }, c.text);
    }));
  }));
};

var _excluded$1 = ["text", "variant"];
var Button = function Button(_ref) {
  var text = _ref.text,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return React.createElement("button", Object.assign({
    className: (variant === 'primary' ? 'text-white bg-brand-green hover:bg-brand-green-dark' : 'text-brand-green bg-white border-brand-green border-2 hover:bg-brand-green hover:text-white') + " shadow rounded-lg w-fit px-4 py-2 transition duration-200 ease-in-out"
  }, props), text);
};

export { Accordion, Button };
//# sourceMappingURL=tes-component-library.esm.js.map
