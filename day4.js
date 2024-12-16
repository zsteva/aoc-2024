
// part 1 version 1

grid = getInput().splitNL().map((row) => row.split(''));
all = [].concat(grid, grid.pivot(), grid.diagonal1(), grid.diagonal2());
allrev = all.map((e) => e.toReversed());
[].concat(all, allrev).map((row) => ([ ... row.join('').matchAll(/XMAS/g) ].length)).sum();

// 2532

// part 1 version 2

getInput().splitNL().splitCOL('').loopYX().map(({value, y, x, arr}) => {
    var s1 = arr.gets([[y,x],[y,x+1],[y,x+2],[y,x+3]], '').join('');
    var s2 = arr.gets([[y,x],[y+1,x],[y+2,x],[y+3,x]], '').join('');
    var s3 = arr.gets([[y,x],[y-1,x+1],[y-2,x+2],[y-3,x+3]], '').join('');
    var s4 = arr.gets([[y,x],[y+1,x+1],[y+2,x+2],[y+3,x+3]], '').join('');
    var result = 0;
    if (s1 == 'XMAS' || s1 == 'SAMX') result++;
    if (s2 == 'XMAS' || s2 == 'SAMX') result++;
    if (s3 == 'XMAS' || s3 == 'SAMX') result++;
    if (s4 == 'XMAS' || s4 == 'SAMX') result++;
    return result;
}).sum();

// 2532

getInput().splitNL().splitCOL('').loopYX().map(({value, y, x, arr}) => {
    var s1 = arr.gets([[y,x],[y+1,x+1],[y+2,x+2]], '').join('');
    var s2 = arr.gets([[y+2,x],[y+1,x+1],[y,x+2]], '').join('');
    if (s1 == 'MAS' || s1 == 'SAM') {
        if (s2 == 'MAS' || s2 == 'SAM') {
            return 1;
        }
    }
    return 0;
}).sum();

// 1941

