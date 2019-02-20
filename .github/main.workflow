workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test"]
}

action "Install" {
  uses = "docker://node:11-alpine"
  runs = "yarn"
}

action "Lint" {
  uses = "docker://node:11-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}
