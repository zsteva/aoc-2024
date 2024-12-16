
// part 1

[ ... getInput().matchAll(/mul\((\d+),(\d+)\)/g) ].map(([_, a, b]) => a*b).sum()

// result 173517243

// part 2

[ ... getInput().replaceAll("\n", '_').replaceAll(/don't\(\).*?do\(\)/g, '').replace(/don't\(\).*$/, '').matchAll(/mul\((\d+),(\d+)\)/g) ].map(([_, a, b]) => a*b).sum()

// result 100450138 

