angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                <div>
                    <h1>Multi-line example</h1>
                    <div class="bar">This is a bit more <em>advanced</em>.</div>
                </div>
            )
        }
    }
);