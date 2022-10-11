class Student {
  id: number;
  name: string;
  noteJob: number[] = [];
  noteTest: number[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const test = new Student(123, 'Fulano');
console.log(test);