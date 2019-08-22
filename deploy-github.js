const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/andytan0727/andytan0727.github.io.git",
  },
  () => {
    console.log("Successfully deployed!")
  }
)
