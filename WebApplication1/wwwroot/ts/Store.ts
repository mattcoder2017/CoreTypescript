class store {
    private _name: string
    private _location: string
    constructor(name: string, location: string)
    {
        this._name = name
        this._location = location
    }

     public info()
     {
         alert(this._name + ' ' + this._location);
    }
}