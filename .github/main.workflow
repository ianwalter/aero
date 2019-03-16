workflow "CI" {
  on = "push"
  resolves = ["Lint"]
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

action "Build CSS" {
  uses = "docker://node:11-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "build"
}

action "Build Site" {
  uses = "docker://node:11-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "build:site"
}
