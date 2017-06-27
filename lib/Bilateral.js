// ### Bilateral

// is a subclass of `Animal`

// #### constructor

// defined with the following parameters
// - name
// - body

// invokes the super constructor with all required arguments using the following hard coded values

// - symmetry = 'bilateral'

// declares and assigns the following private properties

// - _body = body

// #### methods

// - should have a method named `body` that returns a string value based on the private property `_body`
// - should have a method named `body` that sets the value of the private property `_body`

// ---

import Animal from './Animal.js';

export default class Bilateral extends Animal{
  constructor (name, body){
    super(name, 'bilateral');
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(body){
    this._body = body;
    return this._body;
  }
}