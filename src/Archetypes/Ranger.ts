import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static count = 0;
  constructor( 
    _name: string,
    public energyType: EnergyType = 'stamina',
  ) {
    super(_name);
  }

  static createdArchetypeInstances(): number {
    Ranger.count += 1;
    const countRangerInstances = Ranger.count;
    return countRangerInstances;
  }
}

export default Ranger;