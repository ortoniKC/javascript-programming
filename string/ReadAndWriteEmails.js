const fs = require("fs");
fs.readFile("string/emails.txt", (err, data) => {
    if (err) throw Error(
        "File not found!"
    )
    // console.log(data.toString());
    // console.log();
    let emails = getEmails(data.toString());
    emails.forEach(email => {
        // console.log(email);
        fs.writeFile("op.txt", email + "\n", { flag: "a" }, (err) => {
            if (err) throw Error("Not able to write!")
        })

    });
})

function getEmails(str) {
    let emailArray = str.match(/([a-zA-Z0-9.-_]+@[a-zA-Z0-9]+.[a-zA-Z]+)/gi)
    return emailArray;
}
