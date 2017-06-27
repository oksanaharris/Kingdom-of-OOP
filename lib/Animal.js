// ### Animal

// is a subclass of `Eukaryota`

// #### constructor

// defined with the following parameters
// - name
// - symmetry

// invokes the super constructor with all required arguments using the following hard coded values

// - uniCellular = false
// - asexual = false
// - mobile = true
// - heterotroph = true

// declares and assigns the following private properties

// - _symmetry = symmetry

// #### methods

// - should have a method named `symmetry` that returns a string value based on the private property `_symmetry`
// - should have a method named `symmetry` that sets the value of the private property `_symmetry`

// ---

import Eukaryota from './Eukaryota.js';

export default class Animal extends Eukaryota{
  constructor (name, symmetry){
    super (name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(sym){
    this._symmetry = sym;
    return this._symmetry;
  }
}

