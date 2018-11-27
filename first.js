function spinalCase(str) {
	let arr = str.split("")
	for (let i = 1; i < arr.length; i++) {
		if (/\s|[^a-zA-Z]/.test(arr[i])) {
			arr.splice(i, 1, "-")
		} else if (/[A-Z]/.test(arr[i]) && /[a-z]/i.test(arr[i-1])) {
			arr.splice(i, 0, "-")
		}
	}
	return arr.join("").toLowerCase()
}

console.log(spinalCase('This_Is SpinalTap'));