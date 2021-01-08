function sumDigitsRecursively(n) {
    let sum = sumDigits(n);
    if (sum < 10)
        return sum;
    else
        return sumDigitsRecursively(sum);
}
