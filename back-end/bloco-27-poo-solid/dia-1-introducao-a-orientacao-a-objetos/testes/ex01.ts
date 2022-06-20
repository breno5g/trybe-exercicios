class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[];
  private _worksGrades: number[];
  private _allGrades: number[] | [] = [];

  constructor(enrollment: string, name: string, examGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment
    this._name = name
    this._examGrades = examGrades
    this._worksGrades = worksGrades
  }

  private sumGrades() {
    this._allGrades = [...this._worksGrades, ...this._examGrades];
    return this._allGrades.reduce((acc, curr) => acc + curr, 0)
  }

  get average() {
    return (this.sumGrades() / this._allGrades.length).toFixed(2);
  }
}

const aluno = new Student("Math", "Rogerinho", [10,10,10,10], [10, 10])
console.log(aluno.average)
