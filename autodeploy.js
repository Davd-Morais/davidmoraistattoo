import { execSync } from "child_process";

function run(cmd) {
  console.log("\n▶ " + cmd);
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.log("   (comando ignorado)");
  }
}

run("git add .");
run("git commit -m \"update\"");
run("git push");
run("npm run deploy");

console.log("\n🚀 Deploy finalizado com sucesso!");