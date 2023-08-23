import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import { Attack } from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number; 
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy:Energy;
  private _name: string;
  
  constructor(
    name: string,
  ) { 
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this.archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race() : Race {
    return this._race;
  }

  get name() : string {
    return this._name;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  get archetype() : Archetype {
    return this._archetype;
  }

  get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  get defense() : number {
    return this._defense;
  }

  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: Attack): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints; 
  }

  special(enemy: Attack): void {
    enemy.receiveDamage(getRandomInt(10, this._strength)); 
  }
}

export default Character;