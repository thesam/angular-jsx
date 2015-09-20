angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                <div>
                    <h1>{{title}}</h1>
                    <div class="bar" ng-click="go()">This is a bit more <em>advanced</em>.</div>
                </div>
            )
        }
    }
);