import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static count = 0;
  constructor( 
    _name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(_name);
  }

  static createdArchetypeInstances(): number {
    Mage.count += 1;
    const countMageInstances = Mage.count;
    return countMageInstances;
  }
}

export default Mage;