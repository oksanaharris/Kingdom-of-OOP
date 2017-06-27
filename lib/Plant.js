// ### Plant

// is a subclass of `Eukaryota`

// #### constructor

// defined with the following parameters
// - name

// invokes the super constructor with all required arguments using the following hard coded values

// - uniCellular = false
// - asexual = true
// - mobile = false
// - heterotroph = false

// ---

import Eukaryota from './Eukaryota.js';

export default class Plant extends Eukaryota{
  constructor (name){
    super(name, false, true, false, false);
  }
}