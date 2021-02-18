function intWithinBounds(n, lower, upper) {
	if(n>=lower && n<upper){
		if(n%1 > 0){
		 return false		
		}else{
			return true
		}
	}else{
		return false
	}
}