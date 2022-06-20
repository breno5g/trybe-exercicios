class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string, examGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment
    this._name = name
    this._examGrades = examGrades
    this._worksGrades = worksGrades
  }
}
