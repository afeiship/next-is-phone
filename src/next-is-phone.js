(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var PHONE_RE = /^1[345789]\d{9}$/;

  nx.isPhone = function (inTarget) {
    return PHONE_RE.test(String(inTarget));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPhone;
  }
})();
