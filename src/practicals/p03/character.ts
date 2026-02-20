export class Character {}
    
    public name: string;
    public health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    getName(): string {
        return this.name;

    }   
