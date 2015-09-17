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
        assert.equal(angularjsx.convert("var x = {template: <div></div>}"), 'var x = {template: "<div></div>"}');
    });
});