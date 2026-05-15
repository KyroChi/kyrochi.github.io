(function () {
    var STORAGE_KEY = 'synthwave-theme';
    var btn = document.getElementById('theme-toggle');

    function applyTheme(on) {
        if (on) {
            document.body.classList.add('synthwave');
            document.documentElement.classList.add('synthwave');
            btn.textContent = '\u2600\ufe0f Normal';
        } else {
            document.body.classList.remove('synthwave');
            document.documentElement.classList.remove('synthwave');
            btn.textContent = '\ud83c\udf19 Synthwave';
        }
    }

    var saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved === 'on');

    btn.addEventListener('click', function () {
        var isOn = document.body.classList.contains('synthwave');
        var next = !isOn;
        localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
        applyTheme(next);
    });
})();
