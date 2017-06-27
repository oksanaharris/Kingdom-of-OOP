import LivingThing from './LivingThing.js';

export default class Bacteria extends LivingThing{
  constructor (name){
    super(name, true, false, false, true, false);
  }
}

// ### Bacteria

// is a subclass of `LivingThing`

// #### constructor

// defined with the following parameters
// - name

// invokes the super constructor with all required arguments using the following hard coded values

// - uniCellular = true
// - trueNucleus = false
// - anaerobic = false
// - asexual = true
// - mobile = false