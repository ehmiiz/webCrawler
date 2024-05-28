# WebCrawler

Welcome to my WebCrawler project. It's node.js app that will crawl a given URL for links, and output a report.

```sh
npm run start  https://ehmiiz.se
```

```text
REPORT
==========
Found 52 links to page: ehmiiz.se/modules
Found 45 links to page: ehmiiz.se/about
Found 43 links to page: ehmiiz.se/home
Found 41 links to page: ehmiiz.se
Found 40 links to page: ehmiiz.se/blog
Found 34 links to page: ehmiiz.se/blog/ps_ad_unsecure_by_default
Found 25 links to page: ehmiiz.se/blog/ps_agpm_setacl
Found 21 links to page: ehmiiz.se/blog/ps_resourceget
Found 21 links to page: ehmiiz.se/blog/ps_msgraph_mail
Found 19 links to page: ehmiiz.se/blog/ps_docs_contributions
Found 19 links to page: ehmiiz.se/blog/ps_pwgenerator_update
Found 17 links to page: ehmiiz.se/blog/ps_ad_2021_review
Found 17 links to page: ehmiiz.se/blog/ps_automatedgpocloning
Found 17 links to page: ehmiiz.se/blog/ps_pwgenerator
Found 15 links to page: ehmiiz.se/blog/git_restore
...
```

## Install

To run the program, git and nvm is needd

```sh
# Start of by installing git, however you'd like

# Clone the repo
git clone https://github.com/ehmiiz/webCrawler.git

# Step into the cloned directory
cd webCrawler

# Install the node version that's listed in .nvmrc
nvm install

# Activate that version of node
nvm use

# Start crawling!
npm run start  https://ehmiiz.se
```