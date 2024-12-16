
// part 1

list1 = getInput().splitNL().splitCOL().nums().column(0).toSortedNUM();
list2 = getInput().splitNL().splitCOL().nums().column(1).toSortedNUM();
zip(list1, list2).map(([a1, a2]) => Math.abs(a1-a2)).sum();

// result 1651298

// part 2

list1 = getInput().splitNL().splitCOL().nums().column(0);
list2 = getInput().splitNL().splitCOL().nums().column(1);
list1.map((a1) => ([a1, list2.countNUM(a1)])).map((e) => e.product()).sum();

// result 21306195


