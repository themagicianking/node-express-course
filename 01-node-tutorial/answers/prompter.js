const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

let item = "Enter something below.";
let itemTwo = "What's your favorite animal?";

const form = () => {
  return `
  <body>
  <p>${item}</p>
  <form method="POST">
  <input name="item"></input>
  <label for="animals">Choose an animal:</label>
  <select name="animals" id="animals">
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="dolphin">Dolphin</option>
    <option value="snake">Snake</option>
  </select> 
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      console.log("The user's favorite animal is a", body.animals, )
      if (body["item"]) {
        item = body["item"];
      } else {
        item = "Nothing was entered.";
      }
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
