await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('38:491'));
const root=await figma.getNodeByIdAsync('38:492');
const previous=await figma.getNodeByIdAsync('39:2');
const originalPhoto=await figma.getNodeByIdAsync('39:9');
const created=[],changed=[root.id,previous.id],removed=[];
let cover,photo;
const fonts=(await figma.listAvailableFontsAsync()).map(x=>x.fontName).filter(f=>['DM Sans','Barlow Condensed','Cormorant Garamond','Inter'].includes(f.family));
await Promise.all(fonts.map(f=>figma.loadFontAsync(f)));
const keep=n=>(created.push(n.id),n);
const rgb=s=>({r:parseInt(s.slice(1,3),16)/255,g:parseInt(s.slice(3,5),16)/255,b:parseInt(s.slice(5,7),16)/255});
const solid=s=>[{type:'SOLID',color:rgb(s)}];
const gradient=(colors,type='GRADIENT_LINEAR')=>[{type,gradientTransform:[[1,0,0],[0,1,0]],gradientStops:colors.map(([p,s,a=1])=>({position:p,color:{...rgb(s),a}}))}];
function frame(p,name,w,dir='VERTICAL',gap=24,pad=0){const n=keep(figma.createAutoLayout());n.name=name;n.layoutMode=dir;n.resize(w,100);n.primaryAxisSizingMode=dir==='VERTICAL'?'AUTO':'FIXED';n.counterAxisSizingMode=dir==='VERTICAL'?'FIXED':'AUTO';n.itemSpacing=gap;n.paddingTop=n.paddingRight=n.paddingBottom=n.paddingLeft=pad;n.fills=[];p.appendChild(n);return n;}
function label(p,str,size=18,w=1248,color='#C5D1E3',style='Regular',family='DM Sans'){const n=keep(figma.createText());p.appendChild(n);n.fontName={family,style};n.fontSize=size;n.lineHeight={unit:'PERCENT',value:110};n.characters=str;n.name=str.slice(0,60);n.fills=solid(color);n.resize(w,Math.max(size*1.1,20));n.textAutoResize='HEIGHT';n.layoutSizingVertical='HUG';return n;}
function absolute(n,x,y){n.layoutPositioning='ABSOLUTE';n.x=x;n.y=y;}
function glow(name,x,y,w,h,color,opacity){const n=keep(figma.createEllipse());n.name=name;n.resize(w,h);n.fills=gradient([[0,color,opacity],[.45,color,opacity*.35],[1,color,0]],'GRADIENT_RADIAL');cover.insertChild(0,n);absolute(n,x,y);n.blendMode='SCREEN';return n;}
// Preserve the entire previous cover and every source photo assembly.
figma.currentPage.appendChild(previous);previous.name='Archive / original cover';previous.x=4200;previous.y=0;
cover=keep(figma.createAutoLayout());cover.name='00 / DRIVE — cinematic cover';cover.layoutMode='VERTICAL';cover.resize(1440,100);cover.primaryAxisSizingMode='AUTO';cover.counterAxisSizingMode='FIXED';root.insertChild(0,cover);
photo=keep(originalPhoto.clone());cover.appendChild(photo);
cover.paddingTop=64;cover.paddingRight=cover.paddingLeft=96;cover.paddingBottom=64;cover.itemSpacing=32;cover.clipsContent=true;
cover.fills=gradient([[0,'#050811'],[.45,'#111A35'],[1,'#050A12']]);
glow('Cobalt atmospheric light',-170,140,1400,1000,'#2458DD',.8);
glow('Cyan edge illumination',850,320,950,950,'#46D4F5',.38);
glow('Violet ambient reflection',500,-210,1000,850,'#804CDA',.36);
// Fine technical grid is intentionally subordinate to the headline.
for(let x=96;x<1440;x+=156){const line=keep(figma.createRectangle());line.name='Technical grid / '+x;line.resize(1,1700);line.fills=solid('#8BABDC');line.opacity=.055;cover.appendChild(line);absolute(line,x,0);}
const top=frame(cover,'Editorial project strap',1248,'HORIZONTAL',24);
label(top,'AO / ANDREY OZEROV',14,430,'#C2D2EB','Bold');label(top,'AUTOMOTIVE EXPERIENCE',14,520,'#93A9CC','Medium');label(top,'CASE STUDY / 2026',14,250,'#93A9CC','Medium');
const eyebrow=frame(cover,'Project category chips',1248,'HORIZONTAL',12);
for(const [str,w,c]of [['PRODUCT DESIGN',184,'#9DBEFF'],['MULTI-BRAND SYSTEM',228,'#B8DBFF'],['LIVE WEBSITE ↗',190,'#CBF470']]){const pill=frame(eyebrow,str,w,'HORIZONTAL',8,12);pill.cornerRadius=999;pill.fills=solid('#111E35');pill.strokes=[{type:'SOLID',color:rgb('#324C73')}];pill.strokeWeight=1;label(pill,str,12,w-24,c,'Bold');}
const title=label(cover,'One platform.\nThree personalities.',88,1120,'#FFFFFF','Medium');title.lineHeight={unit:'PERCENT',value:100};title.fills=gradient([[0,'#FFFFFF'],[.4,'#D1E5FF'],[.75,'#91B7FF'],[1,'#B6A6FF']]);
label(cover,'An automotive discovery experience. Engineered as one system.',22,1050,'#B6C8E1');
const mast=frame(cover,'DRIVE / display and identity',1248,'HORIZONTAL',20);mast.counterAxisAlignItems='CENTER';
const drive=label(mast,'DRIVE',300,980,'#FFFFFF','Black');drive.letterSpacing={unit:'PERCENT',value:-5};drive.lineHeight={unit:'PERCENT',value:90};drive.fills=gradient([[0,'#FAFDFF'],[.3,'#DCEBFF'],[.62,'#7EAEFF'],[.84,'#4D75F3'],[1,'#B8CFFF']]);
const brand=frame(mast,'Three identity signatures',248,'VERTICAL',16,18);brand.fills=solid('#101A30');brand.cornerRadius=16;brand.strokes=[{type:'SOLID',color:rgb('#344C73')}];
label(brand,'THREE IDENTITIES',11,212,'#8DA4C6','Bold');label(brand,'VOLT',29,212,'#9DBEFF','Black');label(brand,'TORQ',36,212,'#D3FF4E','Black','Barlow Condensed');label(brand,'FORMA',34,212,'#E0C39F','Medium','Cormorant Garamond');
const scene=frame(cover,'Hero automotive scene / full resolution',1248,'VERTICAL',0);scene.cornerRadius=20;scene.clipsContent=true;scene.fills=solid('#0A111E');scene.strokes=gradient([[0,'#8AB8FF',.7],[.45,'#5774A1',.3],[1,'#A1D9FF',.6]]);scene.strokeWeight=1;
scene.appendChild(photo);photo.resize(1248,600);photo.cornerRadius=0;
const hud=frame(scene,'Scene caption and system proof',1248,'HORIZONTAL',32,24);hud.fills=solid('#0D1727');
for(const [a,b,w]of [['03','BRAND IDENTITIES',270],['02','LIGHT / DARK MODES',300],['327','FIGMA VARIABLES',290],['01','SHARED PRODUCT',244]]){const cell=frame(hud,b,w,'VERTICAL',8);label(cell,a,32,w,'#E8F2FF','Bold');label(cell,b,11,w,'#89A7D1','Bold');}
const footer=frame(cover,'Cover credits',1248,'HORIZONTAL',24);label(footer,'ANDREY OZEROV\nProduct / UI/UX Designer',15,430,'#C3D1E5');label(footer,'VOLT  /  TORQ  /  FORMA\nThree expressions. One foundation.',15,520,'#91A8CA');label(footer,'FIGMA + TOKENS STUDIO\nIndependent concept · 2026',13,250,'#91A8CA');
// A vector metallic orbit adds depth without flattening the editable cover.
const orbit=keep(figma.createNodeFromSvg('<svg width="360" height="300" viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#CFEAFF"/><stop offset=".18" stop-color="#3C62AD"/><stop offset=".39" stop-color="#101E43"/><stop offset=".54" stop-color="#E3F6FF"/><stop offset=".68" stop-color="#607FCE"/><stop offset="1" stop-color="#101D3E"/></linearGradient></defs><ellipse cx="180" cy="150" rx="135" ry="69" transform="rotate(-35 180 150)" fill="none" stroke="url(#metal)" stroke-width="46"/><ellipse cx="180" cy="150" rx="135" ry="69" transform="rotate(-35 180 150)" fill="none" stroke="#B4DCFF" stroke-opacity=".7" stroke-width="1.2"/></svg>'));
orbit.name='Metallic orbital sculpture / vector';cover.appendChild(orbit);absolute(orbit,1120,95);orbit.opacity=.8;cover.insertChild(3,orbit);
// Four small automotive symbols create a technical detail line.
const details=frame(cover,'Automotive symbols',1248,'HORIZONTAL',24);
for(const id of ['18:131','18:18','18:13','18:44']){const c=await figma.getNodeByIdAsync(id);const inst=keep(c.createInstance());details.appendChild(inst);inst.resize(22,22);}
label(details,'DISCOVER  /  COMPARE  /  CONFIGURE  /  DRIVE',12,1000,'#8EAACE','Medium');
// Native-resolution source photo frames are retained outside the presentation.
figma.currentPage.selection=[cover];figma.viewport.scrollAndZoomIntoView([cover]);
return{createdNodeIds:created,mutatedNodeIds:changed,removedNodeIds:removed,coverId:cover.id,height:cover.height};
