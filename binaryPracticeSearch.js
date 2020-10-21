function binarySearchIterate(arr, x) {

	let start = 0, end = arr.length - 1;

	//If start > end, that means the target value doesn't exist in the array.
	while (start <= end)
	{
		//First we find the middle index.
		//We use Math.floor because otherwise we'll get a decimal 
		let mid = Math.floor((start + end) / 2);

		//If we found the value, return the index position of the value.
		if (arr[mid] === x)
			return mid;
		//Checking if the value is on the left or right side of the array.
		else if (arr[mid] < x)
			start = mid + 1; //The value is on the right side of array, update the start
		else
			end = mid - 1; //The value is on the left side of array, update the end
	}

	//If value doesn't exist in the array, we return -1 as index position
	return -1; 
}
