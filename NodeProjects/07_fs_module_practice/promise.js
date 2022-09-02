const path = require("path");
const fs = require("fs");
const util = require("util");

// promise 化して、then/catch 構文が使えるようにする
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, "sample.txt"), "utf8")
  .then((data) => {
    return writeFile("sample-copy.txt", data, "utf8");
  })
  .then(() => {
    console.log("sample-copy.txt write OK");
  })
  .catch((err) => {
    console.log(err.message);
  });


// async/await を使った実装
const readFile2 = util.promisify(fs.readFile);
const writeFile2 = util.promisify(fs.writeFile);

(async function () {
  try {
    const data = await readFile2(path.join(__dirname, "sample.txt"), "utf8");
    await writeFile2(path.join(__dirname, "sample-copy2.txt"), data, "utf8");
    console.log("sample-copy2.txt writeOK");
  } catch (err) {
    console.log(err.message);
  }
})();
