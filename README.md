WP-CLI Package Index
====================

This repository contains the source code for what you see at <http://wp-cli.org/package-index>.

### Adding your package to the index

1. [Fork wp-cli/package-index](https://github.com/wp-cli/package-index/fork).
2. Edit the [repositories.txt](https://github.com/wp-cli/package-index/blob/master/repositories.txt) file in your fork.
3. Open a [pull request](https://help.github.com/articles/creating-a-pull-request).

### Internal Setup

The following instructions are meant for developers working on the infrastructure.

1) Run the setup script:

```bash
./scripts/setup.sh
```

2) [Install Satis](https://github.com/composer/satis#usage) somewhere.

3) Build:

```bash
satis build
```

The generated file(s) will be in the `web/` directory.
