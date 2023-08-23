import Monster from './Monster';

class Dragon extends Monster {
  private _lifepoints : number;

  constructor() { 
    super();
    this._lifepoints = 999;
  }
  
  get lifePoints() : number {
    return this._lifepoints;
  }
}

export default Dragon;