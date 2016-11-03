(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-afq/afq"] = factory.call(root);
  }
})([], this, function () {
  var afq = "afq";
  var x = "afqObject";
  var s = Array.prototype.slice;
  var t = Object.prototype.toString;
  var w = this;
  var q = w[afq] && w[afq].q ? s.call(w[afq].q) : [];

  afq = afq === w[x]
    ? w[afq]
    : w[w[x] = afq] = (function (_q) {
      function _afq(n) {
        _afq[n] ? _afq[n].apply(this, s.call(arguments, 1)) : (_q[n] = _q[n] || []).push(s.call(arguments, 1));
      }

      _afq.provide = function (n, f) {
        _afq[n] = f;

        _q[n] && _q[n].forEach(function (a) {
          f.apply(this, a);
        }, this);
      };

      return _afq;
    })({});

  while (q.length) {
    afq.apply(afq, q.shift());
  }

  return afq;
});