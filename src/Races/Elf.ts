import Race from './Race';

class Elf extends Race {
  static count = 0;

  constructor(
    _name: string,
    _dexterity: number,
    public maxLifePoints: number = 99,
  ) {
    super(_name, _dexterity);
  }

  static createdRacesInstances(): number {
    Elf.count += 1;
    const countElfInstances = Elf.count;
    return countElfInstances;
  }
} 

export default Elf;