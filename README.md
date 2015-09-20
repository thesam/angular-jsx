# angular-jsx
Do you use Angular? Are you tired of putting your templates in separate files or trying to escape them in strings?

With the angular-jsx library you can use JSX-style templates directly in your directives. The templates are converted to strings that Angular can understand.

## Used by
* [gulp-angular-jsx](https://www.github.com/thesam/gulp-angular-jsx)

## Examples
### Input
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: <div>This is a simple example.</div>
        };
    }
);
```
### Output
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: "<div>This is a simple example.</div>"
        };
    }
);
```
### Input
```
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
```
### Output
```
angular.module("foo").directive("bar",
    function() {
        return {
            template: (
                "<div>\n    <h1>{{title}}</h1>\n    <div class=\"bar\" ng-click=\"go()\">This is a bit more <em>advanced</em>.</div>\n</div>"
            )
        }
    }
);
```
## Usage
```
var angularjsx = require("angular-jsx");
var output = angularjsx.convert(input);
```
