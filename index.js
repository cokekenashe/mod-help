import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path"

(async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => {
    res.json({ message: "Hello World",
  path: path.resolve("./app") });

  });

  app.get("/help", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/help.txt"), "utf8");
    res.send(data);
  });

// app python files
  app.get("/app/stack", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/stack.py"), "utf8");
    res.send(data);
  });
  app.get("/app/currying", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/currying.py"), "utf8");
    res.send(data);
  });
  
  app.get("/app/threadingdictionary", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/build_dictionary.py"), "utf8");
    res.send(data);
  });
  app.get("/app/closures", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/build_dictionary.py"), "utf8");
    res.send(data);
  });
  
  app.get("/app/concurent", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/concurent.py"), "utf8");
    res.send(data);
  });
  app.get("/app/frequency", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/frequency.py"), "utf8");
    res.send(data);
  });
  app.get("/app/gui", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/gui.py"), "utf8");
    res.send(data);
  });
  app.get("/app/hof", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/hof.py"), "utf8");
    res.send(data);
  });
  app.get("/app/mergesort", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/merge_sort.py"), "utf8");
    res.send(data);
  });
  app.get("/app/numbers", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/numbers.py"), "utf8");
    res.send(data);
  });
  app.get("/app/racecondition", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/race_condition.py"), "utf8");
    res.send(data);
  });
  app.get("/app/recursion", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/recursion.py"), "utf8");
    res.send(data);
  });
  app.get("/app/searchword", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/search_word.py"), "utf8");
    res.send(data);
  });

  // ipynb

  app.get("/app/sql", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/sql.ipynb"), "utf8");
    res.send(data);
  });
  app.get("/app/functional", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/functional.ipynb"), "utf8");
    res.send(data);
  });
  app.get("/app/logic", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/logic.ipynb"), "utf8");
    res.send(data);
  });
  app.get("/app/symbolic", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/symbolic.ipynb"), "utf8");
    res.send(data);
  });
  app.get("/app/automata", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/automata.ipynb"), "utf8");
    res.send(data);
  });



  // network programming 
  app.get("/app/chat/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/chat/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/chat/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/chat/server.py"), "utf8");
    res.send(data);
  });

  app.get("/app/dns/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/dns/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/dns/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/dns/server.py"), "utf8");
    res.send(data);
  });

  app.get("/app/filetransfer/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/filetransfer/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/filetransfer/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/filetransfer/server.py"), "utf8");
    res.send(data);
  });
  app.get("/app/pingpong/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/pingpong/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/pingpong/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/pingpong/server.py"), "utf8");
    res.send(data);
  });
  app.get("/app/rcp/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/rcp/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/rcp/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/rcp/server.py"), "utf8");
    res.send(data);
  });
  app.get("/app/uppercase/client", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/uppercase/client.py"), "utf8");
    res.send(data);
  });
  app.get("/app/uppercase/server", (req, res) => {
    const data = fs.readFileSync(path.resolve("./app/uppercase/server.py"), "utf8");
    res.send(data);
  });
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
})();
