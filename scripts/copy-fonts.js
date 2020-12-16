#!/usr/bin/env node

var shell = require('shelljs');
var path = require('path');
var chalk = require('chalk');


const fontsDir = "src/fonts";

if (shell.test('-d', fontsDir)) {
    shell.echo(chalk.green("Custom fonts is available, just copy!"));
    const fonts = shell.ls("-R", fontsDir);

    fonts.forEach(font => {
        shell.echo(chalk.green(font));
    })

    shell.cp("-R", fontsDir, "docs-build/");
    shell.echo(chalk.green("Fonts are copied ✓!"));
}


