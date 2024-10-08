export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name; // eslint-disable-line no-underscore-dangle
    this.length = length; // eslint-disable-line no-underscore-dangle
    this.students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName; // eslint-disable-line no-underscore-dangle
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength; // eslint-disable-line no-underscore-dangle
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents; // eslint-disable-line no-underscore-dangle
  }
}
