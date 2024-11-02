function chatroomStatus(arr) {
    if(arr.length === 0){
        return "no one online"
    }
    if(arr.length === 1){
        return `${arr[0]} online`
    }
    if(arr.length === 2){
        return `${arr[0]} and ${arr[1]} online`
    }
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`
}
console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));