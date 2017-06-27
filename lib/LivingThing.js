export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this.name = name;
    this.uniCellular = uniCellular;
    this.trueNucleus = trueNucleus;
    this.anaerobic = anaerobic;
    this.asexual = asexual;
    this.mobile = mobile;
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name (){
    return this._name;
  }

  set name (name){
    this._name = name;
    return this._name;
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(uni){
    this._uniCellular = uni;
    return this._uniCellular;
  }

  get multiCellular(){
    if (this._uniCellular === true){
      return false;
    } else {
      return true;
    }
  }

  set multiCellular(mult){
    if (mult === true){
      this._uniCellular = false;
    } else {
      this._uniCellular = true;
    }
    return this._uniCellular;
  }

  get eukaryote(){
    return this._trueNucleus;
  }

  set eukaryote(euk){
    this._trueNucleus = euk;
    return this._trueNucleus;
  }

  get prokaryote(){
    if (this._trueNucleus === false){
      return true;
    } else {
      return false;
    }
  }

  set prokaryote(prok){
    if (prok === true){
      this._trueNucleus = false;
    } else {
      this._trueNucleus = true;
    }
    return this._trueNucleus;
  }

  get anaerobic (){
    return this._anaerobic;
  }

  set anaerobic (ana){
    this._anaerobic = ana;
    return this._anaerobic;
  }

  get aerobic (){
    if (this._anaerobic === true){
      return false;
    } else {
      return true;
    }

  }

  set aerobic (ana){
    if (ana === true){
      this._anaerobic = false;
    } else {
      this._anaerobic = true;
    }
    return this._anaerobic;
  }

  get asexual (){
    return this._asexual;
  }

  set asexual (asex){
    this._asexual = asex;
    return this._asexual;
  }

  get sexual (){
    if (this._asexual === true){
      return false;
    } else {
      return true;
    }

  }

  set sexual (sexual){
    if (sexual === true){
      this._asexual = false;
    } else {
      this._asexual = true;
    }
    return this._asexual;
  }

  //new stuff again

  get mobile (){
    return this._mobile;
  }

  set mobile (mob){
    this._mobile = mob;
    return this._mobile;
  }

  get immobile (){
    if (this._mobile === true){
      return false;
    } else {
      return true;
    }

  }

  set immobile (mob){
    if (mob === true){
      this._mobile = false;
    } else {
      this._mobile = true;
    }
    return this._mobile;
  }
}

