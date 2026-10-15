import {writeFileSync} from 'node:fs';
import {read,flatten,kebab} from '../tokens.mjs';
const groups=[['Core',['Default'],['core']],['Brand',['VOLT','TORQ','FORMA'],['brand/volt','brand/torq','brand/forma']],['Map',['Default'],['map']],['Theme',['Light','Dark'],['theme/light','theme/dark']],['Typography',['Default'],['typography']],['Components',['Default'],['components']]];
const data=[];
for(const[name,modes,sets]of groups){const maps=sets.map(s=>flatten(read(s)));const vars={};for(let i=0;i<maps.length;i++)for(const[path,t]of Object.entries(maps[i])){const leaves=t.type==='typography'?Object.entries(t.value).map(([k,v])=>[path+'.'+k,{value:v,type:({fontFamily:'fontFamilies',fontSize:'fontSizes',fontWeight:'fontWeights',lineHeight:'lineHeights'})[k]}]):[[path,t]];for(const[n,v]of leaves){vars[n]??={path:n,name:n.replaceAll('.','/'),type:v.type,css:`var(--${kebab(n)})`,values:{}};vars[n].values[modes[i]??modes[0]]=v.value;}}data.push({name,modes,vars:Object.values(vars)});}
writeFileSync('/tmp/drive-figma-tokens.json',JSON.stringify(data));
console.log(data.map(x=>({name:x.name,count:x.vars.length})));
