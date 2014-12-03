(function() {
    function $(selector) {
        return document.querySelectorAll(selector);
    }

    function $1(selector) {
        return document.querySelector(selector);
    }

    function closest(elem, selector) {

        var matchesSelector = elem.matches || elem.webkitMatchesSelector ||
                elem.mozMatchesSelector || elem.msMatchesSelector;

        while (elem) {
            if (matchesSelector.bind(elem)(selector)) {
                return elem;
            } else {
                elem = elem.parentElement;
            }
        }
        return false;
    }

    var menu = $1('#menu'),
        menu_top = menu.offsetTop,
        menu_height = menu.offsetHeight,
        content = $1('.content'),
        is_menu_fixed = false;

    window.addEventListener('scroll', function() {
        if(this.scrollY + 10 > menu_top) {
            if(!is_menu_fixed) {
                menu.className += ' fixed';
                content.style.marginTop = menu_height;
                is_menu_fixed = true;
            }
        }
        else {
            menu.className = menu.className.replace(' fixed', '');
            content.style.marginTop = 0;
            is_menu_fixed = false;
        }
    });

    $1( '.show-more-thumbnails > a' ).addEventListener( 'click', function(e) {
        if (e && e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        this.className += ' hide';
        closest(this, '.section-content').className += ' more-thumbnails-visible';
    });
})();
