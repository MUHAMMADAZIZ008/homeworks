import os from "os";

let hsotName_ = os.hostname()
let userName = os.userInfo()['username']

console.log(`Hostname: [${hsotName_}], username: [${userName}]`);