import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static count = 0;
  constructor( 
    _name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(_name);
  }

  static createdArchetypeInstances(): number {
    Necromancer.count += 1;
    const countNecromancerInstances = Necromancer.count;
    return countNecromancerInstances;
  }
}

export default Necromancer;