module.exports = {
    log_dir: "./src/log",
    invalid_dirs: [".git", ".vscode", "node_modules", "react_views"],
    valid_dirs: ["assets", "views"],
    invalid_exts: [
      ".bat",
      ".env",
      ".htaccess",
      ".gitignore",
      // ".json",
      ".txt",
      ".md",
      ".tmp",
    ],
    registered_urls:{
        app:["home","search","contracts"]
    },
    invalid_files: [".htaccess", ".gitignore", ".npmrc", ".env"],
}