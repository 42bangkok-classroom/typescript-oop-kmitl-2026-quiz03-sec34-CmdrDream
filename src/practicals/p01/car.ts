export class Car {}
    public Brand: string;
    public Model: string;

    constructor(brand: string, model: string) {
        this.Brand = brand;
        this.Model = model;
    }
    Car.start(): void {
        console.log(`${this.Brand} ${this.Model} is starting...`);
    }

    Car.accelerate(): void {
        console.log(`${this.Brand} ${this.Model} is accelerating...`);
    }

    Car.brake(): void {
        console.log(`${this.Brand} ${this.Model} is braking...`); 
    }

    Car.stop(): void {
        console.log(`${this.Brand} ${this.Model} is stopping...`);
    }   

    const myCar = new Car("Toyota", "Corolla");
    myCar.start();
    myCar.accelerate();
    myCar.brake();
    myCar.stop();

