(function () {
    var STORAGE_KEY = 'synthwave-theme';
    var btn = document.getElementById('theme-toggle');

    function applyTheme(on) {
        var pic = document.getElementById('profile-pic');
        if (on) {
            document.body.classList.add('synthwave');
            document.documentElement.classList.add('synthwave');
            btn.textContent = '\u2600\ufe0f Normal';
            if (pic) pic.src = pic.dataset.synthwave;
        } else {
            document.body.classList.remove('synthwave');
            document.documentElement.classList.remove('synthwave');
            btn.textContent = '\ud83c\udf19 Synthwave';
            if (pic) pic.src = pic.dataset.normal;
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
