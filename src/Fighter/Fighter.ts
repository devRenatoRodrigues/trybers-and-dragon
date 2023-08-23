import Energy from '../Energy';

interface Attack {
  lifePoints: number;
  attack(enemy:Attack):void;
  receiveDamage(attackPoints: number):number
}

interface Fighter extends Attack {
  strength: number;
  defense: number
  energy?: Energy

  special?(enemy: Fighter): void;
  levelUp():void;

}

export default Fighter;

export { Attack };