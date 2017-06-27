// ### Cnidarian

// is a subclass of `Animal`

// #### constructor

// defined with the following parameters
// - name

// invokes the super constructor with all required arguments using the following hard coded values

// - symmetry = 'radial'

// ---

import Animal from './Animal.js';

export default class Cnidarian extends Animal{
  constructor (name){
    super(name, 'radial');
  }
}