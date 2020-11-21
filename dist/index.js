/*!
 * name: @jswork/next-is-phone
 * description: Regexp for is phone.
 * homepage: https://github.com/afeiship/next-is-phone
 * version: 1.0.0
 * date: 2020-11-21 09:08:19
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var PHONE_RE = /^1[345789]\d{9}$/;

  nx.isPhone = function (inTarget) {
    return PHONE_RE.test(String(inTarget));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPhone;
  }
})();
