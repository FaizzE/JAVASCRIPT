const accountId = 1792837
let accountEmail = "faizlearningjavascript@gmail.com"
var accountPassword = "987654321"
accountcity = "Biharsharif"
let accountState;


// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "6789"
accountcity = "Hyderabad"

console.log(accountId);

/*
Prefer Not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountcity,accountState])