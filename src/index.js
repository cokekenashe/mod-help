import express from "express";
import cors from "cors";
import fs from "fs";

(async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.get("/help", (req, res) => {
    const data = fs.readFileSync("./app/help.txt", "utf8");
    res.send(data);
  });

// app python files
  app.get("/app/stack", (req, res) => {
    const data = fs.readFileSync("./app/stack.py", "utf8");
    res.send(data);
  });
  app.get("/app/currying", (req, res) => {
    const data = fs.readFileSync("./app/currying.py", "utf8");
    res.send(data);
  });
  
  app.get("/app/threadingdictionary", (req, res) => {
    const data = fs.readFileSync("./app/build_dictionary.py", "utf8");
    res.send(data);
  });
  app.get("/app/closures", (req, res) => {
    const data = fs.readFileSync("./app/build_dictionary.py", "utf8");
    res.send(data);
  });
  
  app.get("/app/concurent", (req, res) => {
    const data = fs.readFileSync("./app/concurent.py", "utf8");
    res.send(data);
  });
  app.get("/app/frequency", (req, res) => {
    const data = fs.readFileSync("./app/frequency.py", "utf8");
    res.send(data);
  });
  app.get("/app/gui", (req, res) => {
    const data = fs.readFileSync("./app/gui.py", "utf8");
    res.send(data);
  });
  app.get("/app/hof", (req, res) => {
    const data = fs.readFileSync("./app/hof.py", "utf8");
    res.send(data);
  });
  app.get("/app/mergesort", (req, res) => {
    const data = fs.readFileSync("./app/merge_sort.py", "utf8");
    res.send(data);
  });
  app.get("/app/numbers", (req, res) => {
    const data = fs.readFileSync("./app/numbers.py", "utf8");
    res.send(data);
  });
  app.get("/app/racecondition", (req, res) => {
    const data = fs.readFileSync("./app/race_condition.py", "utf8");
    res.send(data);
  });
  app.get("/app/recursion", (req, res) => {
    const data = fs.readFileSync("./app/recursion.py", "utf8");
    res.send(data);
  });
  app.get("/app/searchword", (req, res) => {
    const data = fs.readFileSync("./app/search_word.py", "utf8");
    res.send(data);
  });

  // ipynb

  app.get("/app/sql", (req, res) => {
    const data = fs.readFileSync("./app/sql.ipynb", "utf8");
    res.send(data);
  });
  app.get("/app/functional", (req, res) => {
    const data = fs.readFileSync("./app/functional.ipynb", "utf8");
    res.send(data);
  });
  app.get("/app/logic", (req, res) => {
    const data = fs.readFileSync("./app/logic.ipynb", "utf8");
    res.send(data);
  });
  app.get("/app/symbolic", (req, res) => {
    const data = fs.readFileSync("./app/symbolic.ipynb", "utf8");
    res.send(data);
  });
  app.get("/app/automata", (req, res) => {
    const data = fs.readFileSync("./app/automata.ipynb", "utf8");
    res.send(data);
  });



  // network programming 
  app.get("/app/chat/client", (req, res) => {
    const data = fs.readFileSync("./app/chat/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/chat/server", (req, res) => {
    const data = fs.readFileSync("./app/chat/server.py", "utf8");
    res.send(data);
  });

  app.get("/app/dns/client", (req, res) => {
    const data = fs.readFileSync("./app/dns/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/dns/server", (req, res) => {
    const data = fs.readFileSync("./app/dns/server.py", "utf8");
    res.send(data);
  });

  app.get("/app/filetransfer/client", (req, res) => {
    const data = fs.readFileSync("./app/filetransfer/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/filetransfer/server", (req, res) => {
    const data = fs.readFileSync("./app/filetransfer/server.py", "utf8");
    res.send(data);
  });
  app.get("/app/pingpong/client", (req, res) => {
    const data = fs.readFileSync("./app/pingpong/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/pingpong/server", (req, res) => {
    const data = fs.readFileSync("./app/pingpong/server.py", "utf8");
    res.send(data);
  });
  app.get("/app/rcp/client", (req, res) => {
    const data = fs.readFileSync("./app/rcp/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/rcp/server", (req, res) => {
    const data = fs.readFileSync("./app/rcp/server.py", "utf8");
    res.send(data);
  });
  app.get("/app/uppercase/client", (req, res) => {
    const data = fs.readFileSync("./app/uppercase/client.py", "utf8");
    res.send(data);
  });
  app.get("/app/uppercase/server", (req, res) => {
    const data = fs.readFileSync("./app/uppercase/server.py", "utf8");
    res.send(data);
  });
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
})();
