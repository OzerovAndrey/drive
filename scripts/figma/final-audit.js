const p=await figma.getNodeByIdAsync(PAGE);await figma.setCurrentPageAsync(p);
const families=p.findAllWithCriteria({types:['COMPONENT','COMPONENT_SET']}).filter(n=>n.type==='COMPONENT_SET'||n.parent?.type!=='COMPONENT_SET');
const overflow=[];let boundNodes=0,tokenBindings=0,imageNodes=0,missingImages=0;const nodes=p.findAll();
for(const n of nodes){if(n.boundVariables&&Object.keys(n.boundVariables).length)boundNodes++;tokenBindings+=n.getSharedPluginDataKeys('tokens').length;if('fills'in n&&Array.isArray(n.fills))for(const fill of n.fills){if(fill.type==='IMAGE')imageNodes++;}if(n.name.startsWith('Photo / ')&&(!('fills'in n)||!n.fills.some(f=>f.type==='IMAGE')))missingImages++;
if(n.parent&&'layoutMode'in n.parent&&n.parent.layoutMode!=='NONE'&&n.visible&&n.type!=='COMPONENT'&&n.type!=='COMPONENT_SET'&&n.layoutPositioning!=='ABSOLUTE'){if(n.x+n.width>n.parent.width+2)overflow.push({id:n.id,name:n.name,parent:n.parent.name,right:n.x+n.width,width:n.parent.width});}}
if(REVIEW)await (await figma.getNodeByIdAsync(REVIEW)).screenshot({scale:SCALE});
return {page:p.name,families:families.map(c=>({id:c.id,name:c.name,variants:c.type==='COMPONENT_SET'?c.children.length:1})),boundNodes,tokenBindings,imageNodes,missingImages,overflow};
