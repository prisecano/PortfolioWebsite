window.jQuery ||
  document.write('<script src="js/vendor/jquery-3.4.1.min.js"></script>')
window.ga = function () {
  ga.q.push(arguments)
}
ga.q = []
ga.l = +new Date()
ga('create', 'UA-158628121-1', 'auto')
ga('set', 'transport', 'beacon')
ga('send', 'pageview')
