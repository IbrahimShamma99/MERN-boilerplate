const app = require("./server");
const { PORT } = require("../config/config.json");
const CreateDirs = require("../config/Dirs");
CreateDirs();
//SECTION The APP is listenning on 5000 Port
var server = app.listen(process.env.PORT || PORT, function () {
  console.log(
    "\u{1F680} Listening on port " + server.address().port + "\u{1F498}"
  );
});
