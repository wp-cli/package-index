WP-CLI Package Index
====================

This repository contains the source code for what you see at <http://wp-cli.org/package-index>.

### Adding your package to the index

Just edit the [satis.json](https://github.com/wp-cli/package-index/blob/master/satis.json) file and open a pull request.

### Internal Setup

The following instructions are meant for developers working on the infrastructure.

1) [Install Satis](https://github.com/composer/satis#usage) somewhere.

2) Create the appropriate clones of this repo:

```bash
git clone git@github.com:wp-cli/package-index.git wp-cli-package-index
cd wp-cli-package-index
git clone . web/
cd web/
git remote set-url origin git@github.com:wp-cli/package-index.git
git checkout gh-pages
cd -
```

3) Build:

```bash
~/git/satis/bin/satis build
```

The generated file(s) will be in the `web/` directory.
