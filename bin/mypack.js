#!/usr/bin/env node

const path=require('path');
const fs=require('fs');
const assert=require('assert');
const script=process.argv[2];
const args=process.argv.slice(3);

const nodeVersion=process.versions.node;
const versions=nodeVersion.split('.');
const major=versions[0];
const minor=versions[1];


const pkg=require('../package.json');

switch(script){
	case '-v':
	case '--version':
        const pkg=require('../package.json');

        console.log(pkg.version);
	break;
	case 'build':
	case 'dev':
	case 'test':
	     const jsonPath=path.resolve(process.cwd(),`package.json`);
	     const pkgConfig=JSON.parse(fs.readFileSync(jsonPath,'utf8'));
         
         console.log('hei version is '+pkgConfig.version);
	break;
	default:
          
	break;
}