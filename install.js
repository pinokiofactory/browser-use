module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/browser-use/web-ui app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        venv_python: "3.11",
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r requirements.txt",
          "playwright install",
          "ollama pull qwen2.5:7b"
        ]
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "app/.env.example",
        dest: "app/.env"
      }
    },
//    {
//      method: "fs.link",
//      params: {
//        venv: "app/env"
//      }
//    }
  ]
}
