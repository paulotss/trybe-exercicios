class Student {
  id: number;
  name: string;
  private _noteJob: number[] = [];
  private _noteTest: number[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  set noteJob(note: number) {
    this._noteJob.push(note);
  }

  set noteTest(note: number) {
    this._noteTest.push(note);
  }

  sumNotes() {
    const noteJob = this._noteJob.reduce((acc, val) =>  acc += val);
    const noteTest = this._noteTest.reduce((acc, val) => acc += val);
    return noteJob + noteTest;
  }

  averageNote() {
    const numNotes = this._noteJob.length + this._noteTest.length;
    return this.sumNotes() / numNotes;
  }
}

const test = new Student(123, 'Fulano');
test.noteJob = 10;
test.noteTest = 10;
console.log(test.sumNotes());
console.log(test.averageNote());