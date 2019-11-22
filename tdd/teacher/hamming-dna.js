export class HammingCalculator {
  constructor() {}
  compare(a, b) {
    if (a.length == 0 && b.length == 0) {
      return 0;
    }
    if (a[0] == b[0]) {
      return 0;
    } else {
      return 1;
    }
  }
}
