function binarySearchRecursive(arr, x, start, end) {

	//If the target value doesn't exist in the array, we return -1 as index position
	if (start > end)
		return -1;

	//Find the middle index
	let mid = Math.floor((start + end) / 2);

	//If we found the value, return the index position of the value.
	if (arr[mid] === x)
		return mid;

	//Checking if the value is on the left or right side of the array.
	if (arr[mid] < x)
		//The value is on the right side of array, update the start
		return binarySearchRecursive(arr, x, mid + 1, end)
	else
		//The value is on the left side of array, update the end
		return binarySearchRecursive(arr, x, start, mid - 1)
}
