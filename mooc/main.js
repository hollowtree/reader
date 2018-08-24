var filename = location.href.match(/[\w\.]+$/)
window.addEventListener('DOMContentLoaded', function () {
    var rate = localStorage.getItem(filename)
    var sh = document.body.scrollHeight
    document.body.scrollTop = sh * Number(rate)
    window.addEventListener('scroll', function (e) {
        var sh = document.body.scrollHeight,
            st = document.body.scrollTop
        localStorage.setItem(filename, st / sh)
    })
})