// ### Protista

// is a subclass of `Eukaryota`

// #### constructor

// defined with the following parameters
// - name
// - uniCellular
// - mobile
// - heterotroph

// invokes the super constructor with all required arguments using the following hard coded values

// - asexual = true

// ---

import Eukaryota from './Eukaryota.js';

export default class Protista extends Eukaryota{
  constructor (name, uniCellular, mobile, heterotroph){
    super (name, uniCellular, true, mobile, heterotroph);
  }
}

