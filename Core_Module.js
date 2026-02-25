
const fs = require("fs");

 const os = require("os");

  

 fs.writeFileSync("dummy.txt", "this is dummy file created by fs module");
 
 console.log(os.platform());
 