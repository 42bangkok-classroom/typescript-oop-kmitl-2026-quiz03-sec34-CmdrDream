import { Character } from "./character";

export class Warrior extends Character {
  // TODO: implement class properties, constructor with super(...), and methods
}
  public name: string;
  public weapon: string;
  public health: number;

  constructor(name: string, weapon: string) {
    super(name);
    this.weapon = weapon;
    this.health = 100;
  }

  getWeapon(): string {
    return this.weapon;
  }

  receiveDamage(damage: number): void {
    this.health -= damage;
  }
    
  console.log(`Warrior ${this.name} wields a ${this.weapon} and has ${this.health} health.`);
  