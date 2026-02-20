export class Character {}
    public name: string;
    public health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    getName(): string{
        return this.name;
    }
    getHealth(): number{
        return this.health;
    }
    receiveDamage(damage: number): void{
        this.health -= damage;
    }
    console.log(`Character ${this.name} has ${this.health} health.`);
        