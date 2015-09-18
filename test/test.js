var angularjsx = require("../index.js");
var assert = require("assert");

describe("angularjsx", function () {
    it("should not touch empty object", function () {
        assert.equal(angularjsx.convert("var x = {}"), "var x = {}");
    });
    it("should not touch object with properties", function () {
        assert.equal(angularjsx.convert("var x = {a: 1}"), "var x = {a: 1}");
    });
    it("should convert simple JSX template", function () {
        assert.equal(angularjsx.convert("var x = {template: <div></div>}"), "var x = {template: \"<div></div>\"}");
    });
    it("should convert multi-line JSX template", function () {
        assert.equal(angularjsx.convert("var x = {template: <div>\n</div>}"), "var x = {template: \"<div>\\n</div>\"}");
    });
    it("should convert JSX with quotes", function () {
        assert.equal(angularjsx.convert("var x = {template: <div class=\"foo\"></div>}"), "var x = {template: \"<div class=\\\"foo\\\"></div>\"}");
    });
    it("should ignore non-JSX properties named 'template'", function () {
        //TODO: \r\n on Windows only? Test on Linux.
        assert.equal(angularjsx.convert("var x = {template: {\n}}"), "var x = {template: {\r\n}}");
    });
    it("should ignore string template", function () {
        assert.equal(angularjsx.convert("var x = {template: \"<br/>\"}"), "var x = {template: \"<br/>\"}");
    });
    it("should handle dots and curly braces in span", function () {
        assert.equal(angularjsx.convert("var x = {template: <span>{{a.b}}</span>}"), "var x = {template: \"<span>{{a.b}}</span>\"}");
    });
    it("should handle parentheses", function () {
        assert.equal(angularjsx.convert("var x = {template: (<br/>)}"), "var x = {template: (\"<br/>\")}");
    });
});