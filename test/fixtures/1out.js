angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                "<div>\n    <h1>Multi-line example</h1>\n    <div class=\"bar\">This is a bit more <em>advanced</em>.</div>\n</div>"
            )
        }
    }
);