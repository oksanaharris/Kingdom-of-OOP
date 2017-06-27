// ### Vertebrate

// is a subclass of `Bilateral`

// #### constructor

// defined with the following parameters
// - name

// invokes the super constructor with all required arguments using the following hard coded values

// - body = 'vertebral-column'

import Bilateral from './Bilateral.js';

export default class Mollusk extends Bilateral{
  constructor (name){
    super(name, 'vertebral-column');
  }
}