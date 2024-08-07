// PATH ga FS faylni qo'shish

const fs = require("node:fs");
const path = require("node:path");

// fs.mkdir(path.join(__dirname, "template"), (err) => {
//   if (err) throw new Error();
//   console.log("Folder was crated saccessfully");
// });

// fs.mkdir(path.join(__dirname, "note"), (err) => {
//   if (err) throw new Error();
//   console.log("Folder was crated saccessfully");
// });

fs.writeFile(
  path.join(__dirname, "note", "december.txt"),
  "Create new course JS",
  (err) => {
    if (err) throw new Error();
    console.log("File was crated successfully!");

    fs.appendFile(
      path.join(__dirname, "note", "december.txt"),
      " and ReactJS",
      (err) => {
        if (err) throw new Error();
        console.log("File was changed successfully!");

        fs.readFile(
            path.join(__dirname, "note", "december.txt"),
            "utf-8",
            (err, data) => {
              if (err) throw new Error();
              console.log(data);
            }
          );
      }
    );
  }
);
