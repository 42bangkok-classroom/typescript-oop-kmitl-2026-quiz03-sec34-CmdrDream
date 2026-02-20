export class User {
    public firstName: string;
    public lastName: string;
    public age: number;
    public fullName: string;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = `${firstName} ${lastName}`;
    }

    setFirstname(firstName: string): void {
        this.firstName = firstName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    setLastname(lastName: string): void {
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        return this.fullName;
    }
    static BIRTH_YEAR = 2000;
    static calculateBirthYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}