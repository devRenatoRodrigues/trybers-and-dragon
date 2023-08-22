import Race from './Race';

class Dwarf extends Race {
  static count = 0;
  constructor(
    _name: string,
    _dexterity: number,
    public maxLifePoints = 80,
  ) {
    super(_name, _dexterity);
  }

  static createdRacesInstances(): number {
    Dwarf.count += 1;
    const countDwarInstances = Dwarf.count;
    return countDwarInstances;
  }
} 

export default Dwarf;