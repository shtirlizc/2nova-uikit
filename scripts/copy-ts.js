/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const glob = require('glob');
const fse = require('fs-extra');
/* eslint-enable @typescript-eslint/no-var-requires */

const srcDir = path.join('./src');
const distDir = path.join('./dist/js');

const files = glob.sync('**/*.d.ts', {
    cwd: srcDir
});

files.forEach(file => {
    const from = path.join(srcDir, file);
    const to = path.join(distDir, file);
    fse.copySync(from, to);
});

const outDir = path.join('dist');

const copyPackageJson = async (distPath) => {
    const pack = await fse.readJSON('package.json');

    delete pack.devDependencies;
    delete pack.scripts;
    delete pack.browserslist;
    delete pack.release;
    delete pack.plugins;
    delete pack.files;

    const out  = `${distPath}/package.json`;
    const packModules = {...pack, files: ["js", "umd", "esm"]};
    await fse.writeJSON(out, packModules, { space: 2 });
}

(async () => {
    await copyPackageJson(outDir);
})();
