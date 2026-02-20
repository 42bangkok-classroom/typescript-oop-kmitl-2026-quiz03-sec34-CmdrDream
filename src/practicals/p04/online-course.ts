export class OnlineCourse {
  public courseName: string;
  public maxStudents: number;
  private enrolledStudents: number;
  private isOpen: boolean;

  constructor(courseName: string, maxStudents: number) {
    this.courseName = courseName;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0;
    this.isOpen = true;
  }

  public getAvailableSeats(): number {
    return this.maxStudents - this.enrolledStudents;
  }

  public enroll(): boolean {
    if (!this.isOpen) {
      return false;
    }

    if (this.enrolledStudents >= this.maxStudents) {
      return false;
    }

    this.enrolledStudents++;
    return true;
  }

  public closeCourse(): void {
    this.isOpen = false;
  }

  public getCourseStatus(): string {
    return this.isOpen ? "Open" : "Closed";
  }
}