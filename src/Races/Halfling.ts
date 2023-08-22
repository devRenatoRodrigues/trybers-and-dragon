import Race from './Race';

class Halfling extends Race {
  static count = 0;
  constructor(
    _name: string,
    _dexterity: number,
    public maxLifePoints: number = 60,
  ) {
    super(_name, _dexterity);
  }

  static createdRacesInstances(): number {
    Halfling.count += 1;
    const countHalflingInstances = Halfling.count;
    return countHalflingInstances;
  }
} 

export default Halfling;