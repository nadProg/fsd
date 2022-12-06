/* eslint-disable import/no-extraneous-dependencies */
import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const isAbsoluteImport = (path: string) => LAYERS.some((layer) => path.startsWith(layer));

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const path = importDeclaration.getModuleSpecifierValue();

    if (isAbsoluteImport(path)) {
      importDeclaration.setModuleSpecifier(`@/${path}`);
    }
  });
});

project.save();
