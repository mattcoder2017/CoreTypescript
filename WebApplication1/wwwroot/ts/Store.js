var store = /** @class */ (function () {
    function store(name, location) {
        this._name = name;
        this._location = location;
    }
    store.prototype.info = function () {
        alert(this._name + ' ' + this._location);
    };
    return store;
}());
//# sourceMappingURL=Store.js.map