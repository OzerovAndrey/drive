import {mkdirSync,writeFileSync} from 'node:fs';
import {brands,modes,read,flatten,config,kebab} from './tokens.mjs';
const px=new Set(['dimension','sizing','spacing','borderRadius','borderWidth','fontSizes']);
const css=(t,v)=>px.has(t)?v+'px':t==='fontFamilies'?`"${v}", ${v==='Cormorant Garamond'?'Georgia, serif':'sans-serif'}`:String(v);
let out='/* GENERATED from tokens/. Do not edit. */\n';
for(const b of brands)for(const m of modes){const{all,res}=config(b,m);out+=`[data-brand="${b}"][data-theme="${m}"]{\n`;for(const[n,t]of Object.entries(all)){const v=res(n);if(t.type==='typography'){for(const[k,v2]of Object.entries(v)){const ty={fontFamily:'fontFamilies',fontSize:'fontSizes',fontWeight:'fontWeights'}[k];out+=`--${kebab(n+'.'+k)}:${css(ty,v2)};\n`;}}else out+=`--${kebab(n)}:${css(t.type,v)};\n`;}out+='}\n';}
mkdirSync('src/styles',{recursive:true});writeFileSync('src/styles/tokens.generated.css',out);
const metadata=read('$metadata'),bundle=Object.fromEntries(metadata.tokenSetOrder.map(s=>[s,read(s)]));bundle.$themes=read('$themes');bundle.$metadata=metadata;
mkdirSync('public',{recursive:true});writeFileSync('public/tokens-studio.json',JSON.stringify(bundle,null,2)+'\n');
const counts=Object.fromEntries(metadata.tokenSetOrder.map(s=>[s,Object.keys(flatten(read(s))).length]));writeFileSync('public/tokens-meta.json',JSON.stringify({counts,total:Object.values(counts).reduce((a,b)=>a+b,0),brands,modes},null,2));
console.log('Generated CSS, Tokens Studio bundle and metadata: 6 configurations.');
