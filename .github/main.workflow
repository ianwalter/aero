workflow "CD" {
  on = "push"
  resolves = ["Lint", "Build CSS", "Deploy"]
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

action "Master Branch Filter" {
  uses = "actions/bin/filter@b2bea07"
  needs = ["Build Site"]
  args = "branch master"
}

action "Deploy" {
  uses = "ianwalter/rclone@master"
  needs = ["Master Branch Filter"]
  args = "sync site/dist spaces:appjumpstart/aero --config rclone.conf"
  secrets = ["RCLONE_CONFIG_SPACES_ACCESS_KEY_ID", "RCLONE_CONFIG_SPACES_SECRET_ACCESS_KEY"]
}
