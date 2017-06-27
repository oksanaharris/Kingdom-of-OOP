
import LivingThing from './LivingThing.js';

export default class Archaea extends LivingThing {
  constructor (name){
    super(name, true, false, true, true, false);
  }
}

// ### Archaea

// is a subclass of `LivingThing`

// #### constructor

// defined with the following parameters
// - name

// invokes the super constructor with all required arguments using the following hard coded values

// - uniCellular = true
// - trueNucleus = false
// - anaerobic = true
// - asexual = true
// - mobile = false