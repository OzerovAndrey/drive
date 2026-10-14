import { readFileSync } from 'node:fs';
export const brands=['volt','torq','forma'],modes=['light','dark'];
export const read=(p)=>JSON.parse(readFileSync(new URL('../tokens/'+p+'.json',import.meta.url),'utf8'));
export function flatten(o,p='',out={}){for(const[k,v]of Object.entries(o)){if(k.startsWith('$'))continue;const n=p?p+'.'+k:k;if(v&&typeof v==='object'&&'value'in v)out[n]=v;else if(v&&typeof v==='object')flatten(v,n,out);}return out;}
export function config(b,m){const all=Object.assign({},...['core','brand/'+b,'map','theme/'+m,'typography','components'].map(x=>flatten(read(x))));function res(n,stack=[]){if(stack.includes(n))throw Error('Cycle: '+n);if(!all[n])throw Error('Missing: '+n);const walk=v=>typeof v==='string'&&/^\{.+\}$/.test(v)?res(v.slice(1,-1),[...stack,n]):Array.isArray(v)?v.map(walk):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,v])=>[k,walk(v)])):v;return walk(all[n].value);}return{all,res};}
export const kebab=s=>s.replace(/([a-z0-9])([A-Z])/g,'$1-$2').replace(/\./g,'-').toLowerCase();
