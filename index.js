var recast = require("recast");

var code = "var foo = {template: <div>\n</div>, str: 'hejhej'}";

// Parse the code using an interface similar to require("esprima").parse. 
var ast = recast.parse(code);
var b = recast.types.builders;

recast.visit(ast, {
        visitObjectExpression: function (path) {
            var obj = path.value;
            for (var i = 0; i < obj.properties.length; i++) {
                var property = obj.properties[i];
                //console.log(property);
                if (property.key.name === "template") {
                    var templateStr = recast.print(property.value).code;

                    console.log("'" + templateStr + "'");
                    property.value = b.literal(templateStr);
                }
            }
            this.traverse(path);
        }
    }
);

var output = recast.print(ast).code;
console.log(output);