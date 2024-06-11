const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const { name } = require("ejs");

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

function splitCamelCase(str) {
  return str
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join(" ");
}

const filePath1 = path.join(__dirname, 'checkedIndices.json');
const filePath2 = path.join(__dirname, 'checkedIndices2.json');
const filePath3 = path.join(__dirname, 'checkedIndices3.json');
const filePath4 = path.join(__dirname, 'checkedIndices4.json');
const filePath5 = path.join(__dirname, 'checkedIndices5.json');
const filePath6 = path.join(__dirname, 'checkedIndices6.json');



const rawData1 = fs.readFileSync(filePath1);
const checkboxData1 = JSON.parse(rawData1);

const rawData2 = fs.readFileSync(filePath2);
const checkboxData2 = JSON.parse(rawData2);

const rawData3 = fs.readFileSync(filePath3);
const checkboxData3 = JSON.parse(rawData3);

const rawData4 = fs.readFileSync(filePath4);
const checkboxData4 = JSON.parse(rawData4);

const rawData5 = fs.readFileSync(filePath5);
const checkboxData5 = JSON.parse(rawData5);

const rawData6 = fs.readFileSync(filePath6);
const checkboxData6 = JSON.parse(rawData6);




app.get("/", function (req, res, next) {
  fs.readdir("./file/array/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/array/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/array/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("index", { medium: medium, easy: easy, hard: hard, checkboxData1: checkboxData1,checkboxData2:checkboxData2,checkboxData3:checkboxData3 });
      });
    });
  });
});

app.get("/sreaching", function (req, res, next) {
  fs.readdir("./file/searching/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/searching/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/searching/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("seraching", { medium: medium, easy: easy, hard: hard,checkboxData4: checkboxData4,checkboxData5:checkboxData5,checkboxData6:checkboxData6 });
      });
    });
  });
});

app.get("/sorting", function (req, res, next) {
  fs.readdir("./file/sorting/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/sorting/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/sorting/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("sorting", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});

app.get("/string", function (req, res, next) {
  fs.readdir("./file/string/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/string/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/string/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("string", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});
app.get("/recursion", function (req, res, next) {
  fs.readdir("./file/recursion/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/recursion/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/recursion/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("recursion", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});

app.get("/bitwise", function (req, res, next) {
  fs.readdir("./file/bitwise/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/bitwise/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/bitwise/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("bitwise", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});

app.get("/linkedlist", function (req, res, next) {
  fs.readdir("./file/linkedlist/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/linkedlist/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/linkedlist/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("linkedlist", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});

app.get("/stack", function (req, res, next) {
  fs.readdir("./file/stack&queue/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/stack&queue/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/stack&queue/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("stack", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});
app.get("/tree", function (req, res, next) {
  fs.readdir("./file/tree/easy", function (err, easy) {
    if (err) {
      console.log("error in easy: " + err);
      return next(err);
    }

    fs.readdir("./file/tree/medium", function (err, medium) {
      if (err) {
        console.log("error in medium: " + err);
        return next(err);
      }

      fs.readdir("./file/tree/hard", function (err, hard) {
        if (err) {
          console.log("error in hard: " + err);
          return next(err);
        }

        res.render("tree", { medium: medium, easy: easy, hard: hard });
      });
    });
  });
});


function readCheckedIndicesFromFile(filename) {

  try {
      const data = fs.readFileSync(filename, 'utf8');
      return JSON.parse(data);
  } catch (err) {
      console.error('Error reading file:', err);
      return [];
  }
}


// Function to write checked indices to file
function writeCheckedIndicesToFile(filename, checkedIndices) {
  fs.writeFileSync(filename, JSON.stringify(checkedIndices));
}

app.get("/update", (req, res) => {
  const filename = req.query.filename;
  const index = req.query.index;
  const checked = req.query.checked === "true";

  // Read checked indices from the specified file
  let checkedIndices = readCheckedIndicesFromFile(filename);

  if (checked && !checkedIndices.includes(index)) {
      checkedIndices.push(index);
  } else if (!checked) {
      checkedIndices = checkedIndices.filter(i => i !== index);
  }

  // Write updated checked indices back to the file
  writeCheckedIndicesToFile(filename, checkedIndices);

  // Send response with updated checked indices
  res.json({ checkedIndices });
});

app.get('/get-checked', (req, res) => {
  const filename = req.query.filename;
  const checkedIndices = readCheckedIndicesFromFile(filename);
  res.json({ checkedIndices });
});

app.post("/add", (req, res) => {
  const name = req.body.Question;
  const cat = req.body.catagories;
  const task = req.body.difficulty;

  const categories = [
      'array', 'searching', 'sorting', 'string', 
      'recursion', 'bitwise', 'linkedlist', 
      'stack&queue', 'tree'
  ];
  const difficulties = ['easy', 'medium', 'hard'];

  if (cat >= 0 && cat < categories.length && task >= 0 && task < difficulties.length) {
      const dir = path.join(__dirname, 'file', categories[cat], difficulties[task]);
      const file = path.join(dir, `${name}.txt`);

      fs.writeFile(file, "", (err) => {
          if (err) {
              console.error(`${categories[cat]} ${difficulties[task]} failed`);
          }
      });

      
  }else 
    {
      console.error("Invalid category or difficulty");
    }

  res.redirect("/");
});


app.listen(3000, () => {
  console.log("server is running");
});
