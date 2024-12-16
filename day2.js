
-- part 1

function isSafe(row) {
	if (row.isIncrease() || row.isDecrease()) {
		return row.diff2().abs().filter((a) => (a > 3)).length == 0;
	} else {
		return false;
	}
}

getInput().splitNL().splitCOL().nums().map((row) => isSafe(row)).filter((a) => a).length;

-- result 606

-- part 2

function isSafeRemove1(row) {
	for (var i = 0; i < row.length; i++) {
        if (isSafe(row.removeN(i))) {
            return true;
        }
    }
	return false;
}

getInput().splitNL().splitCOL().nums().map((row) => isSafeRemove1(row)).filter((a) => a).length;

-- result 644

