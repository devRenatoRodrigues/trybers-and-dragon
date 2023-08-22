import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static count = 0;
  constructor( 
    _name: string,
    public energyType: EnergyType = 'stamina',
  ) {
    super(_name);
  }

  static createdArchetypeInstances(): number {
    Warrior.count += 1;
    const countWarriorInstances = Warrior.count;
    return countWarriorInstances;
  }
}

export default Warrior;