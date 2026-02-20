export class OnlineCourse {}
    public courseName: string;
    public maxStudents: number;
    private enrolledStudents: number;
    private isOpen: boolean;

    constructor(courseName: string, maxStudents: number){
        this.courseName = courseName;
        this.maxStudents = maxStudents;
        this.enrolledStudents = 0;
        this.isOpen = true;
    }

    OnlineCourse.getAvailableSeats(): number {
        return this.maxStudents - this.enrolledStudents;
    }

    enroll(): boolean {
        if (this.isOpen && this.enrolledStudents < this.maxStudents) {
            this.enrolledStudents++;
            return true;
        }
        return false;
    }

    closeCourse(): void {
        this.isOpen = false;
    }

    getAvailableSeats(): number{
        return this.maxStudents - this.enrolledStudents;
    }

    getCourseStatus(): string {
        return this.isOpen ? "Open" : "Closed";
        
    }

    canEnroll(): boolean {
        return this.isOpen && this.enrolledStudents < this.maxStudents;
    }
