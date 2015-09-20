angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                "<div>\n    <h1>{{title}}</h1>\n    <div class=\"bar\" ng-click=\"go()\">This is a bit more <em>advanced</em>.</div>\n</div>"
            )
        }
    }
);