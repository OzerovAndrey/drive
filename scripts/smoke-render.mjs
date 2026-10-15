import {build} from 'esbuild';
import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import {renderToString} from 'react-dom/server';
import React from 'react';
await build({entryPoints:['src/App.tsx'],outfile:'node_modules/.cache/drive-ssr.mjs',bundle:true,platform:'node',format:'esm',packages:'external',loader:{'.css':'empty'},define:{'import.meta.env.BASE_URL':'"./"'},logLevel:'silent'});
const {App}=await import('../node_modules/.cache/drive-ssr.mjs');
const values=new Map();globalThis.localStorage={getItem:k=>values.get(k)??null};globalThis.location={hash:'#/'};
const routes=['/','/cars','/saved','/compare','/electric','/guide/electric-everyday','/guide/choose-your-shape','/guide/test-drive-checklist','/how-it-works','/system','/not-found',...['s1','s2','e1','e2','x3','x5'].flatMap(id=>['/car/'+id,'/configure/'+id])];
let count=0;
for(const brand of ['volt','torq','forma'])for(const theme of ['light','dark'])for(const route of routes){
 values.set('drive.brand',JSON.stringify(brand));values.set('drive.theme',JSON.stringify(theme));values.set('drive.compare',JSON.stringify(['s1','e2','x3']));values.set('drive.saved',JSON.stringify(['s1','e2']));globalThis.location.hash='#'+route;
 const html=renderToString(React.createElement(App));assert.ok(html.includes('<main'));assert.ok(html.includes('DRIVE'));
 for(const match of html.matchAll(/src="\.\/([^"?]+)"/g))assert.ok(existsSync('public/'+match[1]),'Missing public asset: '+match[1]);
 assert.ok(!html.includes('undefined'),'Undefined content: '+brand+'/'+theme+route);count++;
}
console.log(`SSR smoke: ${count} route/appearance renders; referenced public images exist. Browser interactions are not covered.`);
