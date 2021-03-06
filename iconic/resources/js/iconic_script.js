/**
 * Iconic plugin for Craft CMS
 *
 * Iconic JS
 *
 * @author    Piccirilli Dorsey, Inc. (Nicholas O'Donnell)
 * @copyright Copyright (c) 2016 Piccirilli Dorsey, Inc. (Nicholas O'Donnell)
 * @link      http://picdorsey.com
 * @package   Iconic
 * @since     1.0.4
 */

var iconic = {
    init: function () {
        this.repalceWithIcons();
    },

    repalceWithIcons: function () {
        var $icons = document.querySelectorAll('.redactor-toolbar a');

        if (typeof $icons == 'undefined') {
            return;
        }

        for (var i = 0; i < $icons.length; i++) {
            var $icon = $icons[i];
            var key = $icon.getAttribute('rel');

            if (typeof icons[key] == 'undefined') {
                continue;
            }

            $icon.innerHTML = icons[key];
        }
    }
};

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        iconic.init();
    }
}
