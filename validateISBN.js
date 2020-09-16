var validISBN10 = function(isbn) {

    var sum,
        weight,
        digit,
        check,
        i;

    isbn = isbn.replace(/[^0-9X]/gi, '');

    if (isbn.length != 10 && isbn.length != 13) {
        return false;
    }

    if (isbn.length == 13) {
        sum = 0;
        for (i = 0; i < 12; i++) {
            digit = parseInt(str[i]);
            if (i % 2 == 1) {
                sum += 3*digit;
            } else {
                sum += digit;
            }
        }
        check = (10 - (sum % 10)) % 10;
        return (check == isbn[isbn.length-1]);
    }

    if (isbn.length == 10) {
        weight = 10;
        sum = 0;
        for (i = 0; i < 9; i++) {
            digit = parseInt(isbn[i]);
            sum += weight*digit;
            weight--;
        }
        check = 11 - (sum % 11);
        if (check == 10) {
            check = 'X';
        }
        return (check == isbn[isbn.length-1].toUpperCase());
    }
}