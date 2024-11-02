
const database = {
	studentsList: {
		'xamidullo': {
			name: "xamidullo",
			age: 33,
			id: 123,
			tolov: false
		}
	},

	create(user) {
		this.studentsList[user["name"]] = user
        return this.studentsList
	},

	read(name) {
        for(key in this.studentsList){
            if(key === name){
                return this.studentsList.key
            }
        }
		//userni studentsList dan topib qaytarib bersin!.
	},

	update(name, user) {
        let userKey = ""
        for(key in this.studentsList){
            if (name === key){
                userKey = key
            }else{
                return "Bunday user yo'q"
            }
        }
        for (key in this.studentsList[userKey]){
            for (key2 in user){
                if (key === key2){
                    this.studentsList[key] = user[key2]
                }
            }
        }
        return this.studentsList
		// studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
	},

	delete(name) {
		// studentsList dan faqat bitta userni o'chiring! qaytarish ihtihoriy message qaytarish ihtiyoriy
		delete this.studentsList[name]

	}

}

database.create({
	name: "Muhammadaziz",
	age: 16,
	id: 15588,
	tolov: true
})

database.update("xamidullo", {
	name: "azizbek",
	age: 21,
	tolov: true
})

// database.delete("xamidullo")

console.log(database.studentsList)