//basic commands
var fs=require('fs');

//CRUD IN NODEJS
//node in terminal
//.exit to exit


//1 CREATE
//to make folder
fs.mkdirSync('foldername1');
//it makes a folder, which proofs that nodejs can easily go through your system.

//to make file inside folder
fs.writeFileSync("foldername/filename.txt","here is content of file",(err)=>{
    if(err){
        console.log(err);
    } 
    });

//2 UPDATE
fs.appendFileSync("foldername/filename.txt","content to append");

//3 READ
fs.readFileSync("foldername/filename.txt");
//it returns buffer
//we have to rememeber 3 things: security,performance,h cases.
//why it returns buffer- the data file maybe too large, which cannot be readed by one single. thus 
//the data is stored in chunks of buffer,thus readable in pieces.
//we just have to provide an encoding, here "utf-8" which converts this buffer into txt.
fs.readFileSync("foldername/filename.txt","utf-8");
//will return readable file


//4 RENAME
fs.renameSync("foldername/filename.txt","foldername/filename2.txt");

//5 DELETE
//before deleting folder, we need to delete files inside it.
fs.unlinkSync("day1-tutorial/hello2.txt");
//deleted
fs.rmdir("foldername");
//folder deleted



mkdir foldername ;
//for normal terminal folder making

//REPL method - read execute print loop
//node filename.js to run using nodejs

//tha- implement CRUD commands from terminal
//GOOGLE- how to read arguments in nodejs
