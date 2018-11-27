function spinalCase(str) {
	return str.replace(/[^a-zA-Z]/g, "-").replace(/(?<=[a-z])[A-Z]/g, "-$&").toLowerCase()
}

console.log(spinalCase('This_Is_SpinalTap'));