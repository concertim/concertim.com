
## Project Setup

```bash
hugo new site concertim.com
cd concertim.com
git init
git submodule add https://github.com/chaoming/hugo-saasify-theme themes/hugo-saasify-theme
cp themes/hugo-saasify-theme/tailwind.config.copy.js ./tailwind.config.js
npm install
```

## Dev

- Run dev server on localhost (http://localhost:1313)
```bash
hugo server -F -D --cleanDestinationDir
```

## Release 

To build the site simply
```bash
hugo --cleanDestinationDir
```
Then sync the contents of `public/` to the web root of a web server somewhere (probably want to remove any existing old/stuff so something like `rsync -auv --delete`) 
