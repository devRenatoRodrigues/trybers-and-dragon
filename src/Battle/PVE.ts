import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (Fighter | SimpleFighter)[] = [];
  constructor(
    player:Fighter,
    monster: (Fighter | SimpleFighter)[] = [],
  ) { 
    super(player);
    this._player = player;
    this._monsters = monster;
  }

  fight(): number {
    while (this._player.lifePoints > -1 && this._monsters.length > 0) {
      const monster = this._monsters[0];
      this.player.attack(monster);
      monster.attack(this._player);
      if (monster.lifePoints <= 0) {
        this._monsters.shift(); 
      }
    }
    return super.fight();
  }
}
export default PVE;

const play1 = new Character('Renato');
// const monster = [new Monster(), new Monster(), new Monster()];
const monster = [new Monster()];

const newbattle = new PVE(play1, monster);

console.log(newbattle.fight());
