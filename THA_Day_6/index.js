const fs = require('fs')
console.log("_______________________WELCOME...!________________________");
console.log("_______A project for CRUD opration with file system_______");
console.log()

// take cmd arguments as an array , starts form index 2
const cmdData = process.argv.slice(2)
// for create and/or write into the 
if (cmdData[0]==="WRITE"){
    let fileName= cmdData[1];
    let fileContent = cmdData.slice(2).join(' ')
    fs.writeFile(`./${fileName}`, `${fileContent}`, (err)=>{
        if (err) console.log("Can't write.");
        console.log('Done!');
    })
    console.log('File is creating and writing the data inside the file'+` ${fileName}...`);
}

// for read from the file 
else if (cmdData[0]==="READ"){
    let fileName= cmdData[1];
    if (fs.existsSync(`./${fileName}`)){
        fs.readFile(`./${fileName}`,"UTF-8", (err,data)=>{
            if (err) console.log("Can't read.");
            console.log(data);
        })
    }
    else{
        console.log("file has no text.");
    }
    console.log("Data inside the file"+` ${fileName} is:`)
}
// for rename  the file 
else if (cmdData[0]==="RENAME"){
    let oldFileName= cmdData[1];
    let newFileName= cmdData[2];
    if (fs.existsSync(`./${oldFileName}`)){
        fs.rename(`./${oldFileName}`,`./${newFileName}`,(err)=>{
            if(err) console.log(err);
            else{
                console.log("file name updated");
            }
        })
    }
    else{
        console.log("file dosen't exist.");
    }
    console.log("filename is updating...");
}
// for remove the file 
if (cmdData[0]==="REMOVE"){
    let fileName= cmdData[1];
    if (fs.existsSync(`./${fileName}`)){
        fs.rmSync(`./${fileName}`)
        console.log("file removed.");
    }
    else{
        console.log("file not exists");
    }
}
