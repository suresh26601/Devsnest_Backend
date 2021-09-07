const fs = require('fs')
console.log("_______________________WELCOME...!________________________");
console.log("_______A project for CRUD opration with file system_______");


// take cmd arguments as an array , starts form index 2
const cmdData = process.argv.slice(2)

// for create and/or write into the 
if (cmdData[0]==="WRITE"){
    let fileName= cmdData[1];
    let fileContent = cmdData.slice(2).join(' ')
    console.log(fileContent);
    fs.writeFileSync(`./${fileName}`, `${fileContent}`, (err)=>{
        if (err) console.log("Can't write.");
    })
}
// for read from the file 
if (cmdData[0]==="READ"){
    let fileName= cmdData[1];
    if (fs.existsSync(`./${fileName}`)){
        let fileData = fs.readFileSync(`./${fileName}`,"UTF-8", (err)=>{
            if (err) console.log("Can't read.");
        })
        console.log(fileData);
    }
    else{
        console.log("file has no text.");
    }
}
// for rename  the file 
if (cmdData[0]==="RENAME"){
    let fileName= cmdData[1];
    if (fs.existsSync(`./${fileName}`)){
        fs.renameSync("./data.txt",`./${fileName}`)
        console.log("file name updated");
    }
    else{
        console.log("file dosen't exist.");
    }
    
}
// for remove the file 
if (cmdData[0]==="REMOVE"){
    let fileName= cmdData[1];
    if (fs.existsSync(`./${fileName}`)){
        fs.rmSync("./data.txt")
        console.log("file removed.");
    }
    else{
        console.log("file removed.");
    }
}
