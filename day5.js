
// part 1
// example:
// input = [...document.getElementsByTagName('code')].map((e) => e.innerText)[5];

input = getInput();
rules = new Set(input.split("\n\n")[0].splitNL());
list1 = input.split("\n\n")[1].splitNL().splitCOL(",");
list1.filter((row) => {
    return row.comb2().map(([a, b]) => rules.has(b + "|" + a) ? 1 : 0).sum() == 0;
}).map((row) => row[Math.floor(row.length / 2)]).nums().sum();

// result 6242

// part 2

list1.filter((row) => {
    return row.comb2().map(([a, b]) => rules.has(b + "|" + a) ? 1 : 0).sum() > 0;
}).map((row) => {
    return row.sort((a, b) => rules.has(b + "|" + a) ? 1 : -1);
}).map((row) => row[Math.floor(row.length / 2)]).nums().sum();

// result 5169

