import {readFileSync,writeFileSync} from 'node:fs';
import {flatten,read} from '../tokens.mjs';
const manifest=JSON.parse(readFileSync('docs/figma/manifest.json','utf8'));
const themes=read('$themes');const base=themes.find(t=>t.group==='Base');if(base)base.group='Core';
for(const t of themes.filter(t=>t.group==='Brand'))t.selectedTokenSets.map='source';
if(!themes.some(t=>t.group==='Map'))themes.splice(4,0,{id:'map',name:'Default',group:'Map',selectedTokenSets:{core:'source',map:'enabled'}});
for(const t of themes){const c=manifest.collections[t.group];t.$figmaCollectionId=c.id;t.$figmaModeId=c.modes[t.name];const refs={};for(const[set,status]of Object.entries(t.selectedTokenSets)){if(status!=='enabled')continue;for(const path of Object.keys(flatten(read(set))))if(manifest.variables[path])refs[path]=manifest.variables[path];}t.$figmaVariableReferences=refs;if(t.group==='Typography')t.$figmaStyleReferences=Object.fromEntries(manifest.styles.filter(s=>!['label','eyebrow'].includes(s.name.split('/')[1])).map(s=>['typography.'+s.name.split('/')[1],s.id]));}
writeFileSync('tokens/$themes.json',JSON.stringify(themes,null,2)+'\n');
const values=Object.fromEntries(read('$metadata').tokenSetOrder.map(set=>[set,Object.entries(flatten(read(set))).map(([name,t])=>({name,...t}))]));
writeFileSync('/tmp/drive-plugin-values.json',JSON.stringify(values));
console.log({sets:Object.keys(values).length,themes:themes.length,variables:Object.keys(manifest.variables).length});
