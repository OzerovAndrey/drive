import {brands,modes,read,flatten,config} from './tokens.mjs';
const keys=x=>Object.keys(flatten(read(x))).sort().join(',');
for(const b of brands)if(keys('brand/'+b)!==keys('brand/'+brands[0]))throw Error('Brand parity: '+b);
if(keys('theme/light')!==keys('theme/dark'))throw Error('Theme parity');
const permitted=new Set([...Object.keys(flatten(read('brand/torq'))),...Object.keys(flatten(read('theme/light'))),...Object.keys(flatten(read('typography')))]);
for(const[n,t]of Object.entries(flatten(read('components'))))if(typeof t.value!=='string'||!/^\{.+\}$/.test(t.value)||!permitted.has(t.value.slice(1,-1)))throw Error('Component layering: '+n);
const lum=hex=>{const rgb=hex.slice(1,7).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
const ratio=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
let count=0;for(const b of brands)for(const m of modes){const{all,res}=config(b,m);for(const n of Object.keys(all))res(n);for(const bg of ['color.bg.primary','color.bg.surface'])for(const fg of ['color.text.primary','color.text.secondary','color.text.accent','color.status.danger','color.status.success']){const r=ratio(res(fg),res(bg));if(r<4.5)throw Error(`${b}/${m} ${fg}: ${r}`);count++;}if(ratio(res('color.fill.onPrimary'),res('color.fill.primary'))<4.5)throw Error('CTA contrast');}
console.log(`Tokens valid: 6 configurations; ${count+6} contrast checks.`);
