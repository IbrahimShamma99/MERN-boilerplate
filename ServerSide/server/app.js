const app = require("./server");
const { PORT } = require("../config/config.json");
const path = require("path");

//SECTION The APP is listenning on 5000 Port
var server = app.listen(process.env.PORT || PORT, function() {
    console.log("\u{1F9F1} CWD Backend \u{1F9F1} ",__dirname);
    console.log("\u{1F9F1} CWD exported static \u{1F9F1} ",path.join(__dirname, "../public/avatar/"));
    console.log('\u{1F680} Listening on port ' + server.address().port+"\u{1F498}");    
});