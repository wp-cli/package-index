WP-CLI Package Index
====================

This repository contains the source code for what you see at <http://wp-cli.org/package-index>.

### Adding your package to the index

Dead simple:

1. Go to the [repositories.txt](https://github.com/wp-cli/package-index/blob/master/repositories.txt) file.
2. Press the Edit button in the upper-right corner.
3. Add your package's repository URL to the file and save.

The Github UI will take care of forking and opening a pull request for you.

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
