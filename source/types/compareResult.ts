'use strict';

export enum CompareResult {
	greater = 1,
	equal = 0,
	less = -1,
}

export function getCompareResult(num: number): CompareResult {
	'use strict';
	if (num === 0) {
		return CompareResult.equal;
	} else if (num > 0) {
		return CompareResult.greater;
	} else {
		return CompareResult.less;
	}
}
