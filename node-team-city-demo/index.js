console.log("Node.js app triggered by TeamCity");

if (process.env.TEAMCITY_VERSION) {
  console.log("Running inside TeamCity CI");
}

