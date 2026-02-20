export class User {}
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

    User.setFirstname(firstName: string): void {
        this.firstName = firstName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    User.setLastname(lastName: string): void {
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    User.setAge(age: number): void {
        this.age = age;
    }

    User.getAge(): number {
        return this.age;
    }

    User.getFullName(): string {
        return this.fullName;
    }

