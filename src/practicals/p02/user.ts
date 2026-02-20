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

    const user1 = new User("John", "Doe", 30);
    console.log(user1.getFullName());
    console.log(user1.getAge());
    
    user1.setFirstname("Jane");
    user1.setLastname("Smith");
    user1.setAge(25);
    console.log(user1.getFullName());
    console.log(user1.getAge());
    