const path = require("path");
const fs = require("fs");
const PublicDir = path.join(__dirname, "../public/");
const AvatarDir = path.join(__dirname, "../public/avatar/");
console.log("\u{1F9F1} CWD Backend \u{1F9F1} ", __dirname);
console.log("\u{1F9F1} CWD exported static \u{1F9F1} ", AvatarDir);

const CreateDir = (Dir) => {
  if (!fs.existsSync(Dir)) {
    fs.mkdirSync(Dir);
  }
};

const Dirs = [PublicDir, AvatarDir];

const CreateDirs = () => {
  Dirs.map((dir) => {
    CreateDir(dir);
  });
};

module.exports = CreateDirs;
