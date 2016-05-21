(function(afq, x, w, s, t, q, m) {
  if (w[afq]) {
    Object.keys(w[afq]).forEach(function(k) {
      if (t.call(this[k]) === "[object Function]") {
        m[k] = this[k];
      }
    }, w[afq]);

    if (w[afq].q) {
      q = q.concat(w[afq].q);
    }
  }

  afq = afq === w[x]
    ? w[afq]
    : w[w[x] = afq] = function(n) {
      afq[n].apply(this, s.call(arguments, 1));
    };

  Object.keys(m).forEach(function(k) {
    afq[k] = this[k];
  }, m);

  while (q.length) {
    afq.apply(afq, q.shift());
  }
})("afq", "afqObject", window, Array.prototype.slice, Object.prototype.toString, [], {});
