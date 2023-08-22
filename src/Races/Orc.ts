import Race from './Race';

class Orc extends Race {
  static count = 0;
  constructor(
    _name: string,
    _dexterity: number,
    public maxLifePoints: number = 74,
  ) {
    super(_name, _dexterity);
  }

  static createdRacesInstances(): number {
    Orc.count += 1;
    const countOrcInstances = Orc.count;
    return countOrcInstances;
  }
} 

export default Orc;