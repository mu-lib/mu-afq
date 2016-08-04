(function(afq, x, w, s, t, q) {
  q = w[afq] && w[afq].q ? q.concat(w[afq].q) : q;

  afq = afq === w[x]
    ? w[afq]
    : w[w[x] = afq] = (function(_q) {
      function _afq(n) {
        _afq[n] ? _afq[n].apply(this, s.call(arguments, 1)) : (_q[n] = _q[n] || []).push(arguments);
      }

      _afq.provide = function(n, f) {
        _afq[n] = f;

        _q[n] && _q[n].forEach(function(a) {
          f.apply(this, a);
        }, this);
      };

      return _afq;
    })({});

  while (q.length) {
    afq.apply(afq, q.shift());
  }
})("afq", "afqObject", window, Array.prototype.slice, Object.prototype.toString, []);
