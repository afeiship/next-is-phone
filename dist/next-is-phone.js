/*!
 * name: @feizheng/next-is-phone
 * description: Regexp for is phone.
 * homepage: https://github.com/afeiship/next-is-phone
 * version: 1.0.0
 * date: 2020-06-23T01:05:54.955Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var PHONE_RE = /^1[34578]\d{9}$/;

  nx.isPhone = function (inTarget) {
    return PHONE_RE.test(String(inTarget));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPhone;
  }
})();

//# sourceMappingURL=next-is-phone.js.map
