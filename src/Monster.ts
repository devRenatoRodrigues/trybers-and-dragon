import { SimpleFighter } from './Fighter';
import { Attack } from './Fighter/Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() { 
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  get lifePoints() : number {
    return this._lifePoints;
  }
  
  get strength() : number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (this._lifePoints <= 0) {
      return -1;
    }
    return damage;
  }

  attack(enemy: Attack): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;