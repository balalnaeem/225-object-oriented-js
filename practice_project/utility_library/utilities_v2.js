var _ = function(elements) {
  var u = {
    first: function() {
      return elements[0];
    },
    last: function() {
      return elements[elements.length - 1];
    },
    without: function(ele) {
      var args = [].slice.call(arguments);
      return elements.filter(e => !args.includes(e));
    },
    lastIndexOf: function(ele) {
      var index;
      elements.forEach((e, i) => {
        if (e === ele) {
          index = i;
        }
      });

      return index;
    },
    sample: function(size) {
      var sampleArr = [];
      var randomIndex = function(arr) {
        return Math.floor(Math.random() * arr.length);
      };

      if (size === undefined) {
        return elements[randomIndex(elements)];
      }

      for (var i = 0; i < elements.length; i += 1) {
        if (!sampleArr.includes(elements[i])) {
          sampleArr.push(elements[i]);
        }
      }

      return sampleArr;
    },

    findWhere: function(props) {
      var match;

      elements.some(function(obj) {
        var allMatch = true;

        for (var prop in props) {
          if (!(prop in obj) || obj[prop] !== props[prop]) {
            allMatch = false;
          }
        }

        if (allMatch) {
          match = obj;
          return true;
        }
      });

      return match;
    },
    where: function(props) {
      var matched = [];
      elements.forEach(function(obj) {
        var allMatch = true;

        for (var prop in props) {
          if (!(prop in obj) || obj[prop] !== props[prop]) {
            allMatch = false;
          }
        }

        if (allMatch) {
          matched.push(obj);
        }
      });

      return matched;
    },
    pluck: function(key) {
      var valuesArr = [];
      elements.forEach(function(obj) {
        if (obj[key]) {
          valuesArr.push(obj[key]);
        }
      });

      return valuesArr;
    },
    keys: function() {
      return Object.keys(elements);
    },
    values: function() {
      return Object.values(elements);
    },
    pick: function(props) {
      props = [].slice.call(arguments);
      var newObj = {};
      Object.keys(elements).forEach(function(key) {
        if (props.includes(key)) {
          newObj[key] = elements[key];
        }
      });

      return newObj;
    },
    omit: function(props) {
      props =  [].slice.call(arguments);
      var newObj = {};
      Object.keys(elements).forEach(function(key) {
        if (props.indexOf(key) === -1) {
          newObj[key] = elements[key];
        }
      });

      return newObj;
    },
    has: function(prop) {
      if (elements[prop]) {
        return true;
      }

      return false;
    },
  };

  _.range = function(start, stop) {
    var arr = [];
    var i;

    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (i = start; i < stop; i += 1) {
      arr.push(i);
    }

    return arr;
  };

  _.extend = function(obj1) {
      var objects = [].slice.call(arguments, 1);
      objects.forEach(function(obj) {
        for (var key in obj) {
          obj1[key] = obj[key];
        }
      });

      return obj1;
    };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };

  _.isObject = function(obj) {
    var type = typeof obj;

    return type === 'function' || type === 'object' && !!obj;
  };

  _.isFunction = function(obj) {
    var type = typeof obj;
    return type === 'function';
  };

  // _.isBoolean = function(obj) {
  //   return toString.call(obj) === "[object Boolean]";
  // };

  // _.isString = function(obj) {
  //   return toString.call(obj) === "[object String]";
  // };

  // _.isNumber = function(obj) {
  //   return toString.call(obj) === '[object Number]';
  // };

  (['String', 'Number', 'Boolean']).forEach(function(method) {
    _['is' + method] = function(obj) {
      return toString.call(obj) === "[object " + method + "]";
    }
  });

  (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach(function(method) {
    u[method] = function () { _[method].call(u, elements)};
  });

  return u;
};



