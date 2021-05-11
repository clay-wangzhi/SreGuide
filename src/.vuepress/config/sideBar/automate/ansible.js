module.exports = [
  "",
  "first",
  "inventory",
  {
    title: "3 Ansible Ad-hoc命令集",
    path: "ad-hoc/",
    collapsable: false,
    children: ["lineinfile",]
  },
  {
    title: "4 Ansible Playbook",
    path: "playbook/",
    collapsable: false,
    children: ["dir-handler", "playbook-for", "playbook-if", "advanced-playbook", "playbook-tags", "roles", "file-jinja2", "yaml",]
  },
  {
    title: "5 Ansible变量",
    path: "var/",
    collapsable: false,
    children: ["custom", "fact", "magic", "lookup", "vault",]
  },
  "optimize",
  "qa",
]