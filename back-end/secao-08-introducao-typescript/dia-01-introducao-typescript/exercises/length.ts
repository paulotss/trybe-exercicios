enum units {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001
}

function lengthConvert(value: number, base: string, convert: string):void {
  const units: Array<string> = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const pos1: number = units.indexOf(base) + 1;
  const pos2: number = units.indexOf(convert) + 1;
  const multi: number = pos1 - pos2;
  if (multi > 0) {
    console.log(value / (Math.pow(10, Math.abs(multi))));
  } else if (multi < 0) {
    console.log(value * (Math.pow(10, Math.abs(multi))));
  } else {
    console.log(value);
  }
}

lengthConvert(10, 'm', 'km');