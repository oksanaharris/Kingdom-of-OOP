// ### Eukaryota

// is a subclass of `LivingThing`

// #### constructor

// defined with the following parameters
// - name
// - uniCellular
// - asexual
// - mobile
// - heterotroph

// invokes the super constructor with all required arguments using the following hard coded values

// - trueNucleus = true
// - anaerobic = false

// declares and assigns the following private properties

// - _heterotroph = heterotroph

// #### methods

// - should have a method named `heterotroph` that returns a boolean value based on the private property `_heterotroph`
// - should have a method named `heterotroph` that sets the value of the private property `_heterotroph`
// - should have a method named `autotroph` that returns a boolean value based on the private property `_heterotroph`
// - should have a method named `autotroph` that sets the value of the private property `_heterotroph`

import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing{
  constructor (name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph(hetero){
    this._heterotroph = hetero;
    return this._heterotroph;
  }

  get autotroph(){
    if (this._heterotroph === true){
      return false;
    } else {
      return true;
    }
  }

  set autotroph(auto){
    if (auto === true){
      this._heterotroph = false;
    } else {
      this._heterotroph = true;
    }
    return this._heterotroph;
  }
}