import {useEffect,useRef,type ReactNode} from 'react';
export function Icon({name,size=20}:{name:string;size?:number}){const paths:Record<string,ReactNode>={wheel:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m3 9 6 2m6 0 6-2m-9 6v6"/></>,
gauge:<><path d="M4 19a10 10 0 1 1 16 0"/><path d="m12 12 5-5M6 15l1-1m-2-5 2 1m3-6v2m7 7 2 1"/><circle cx="12" cy="12" r="2"/></>,
battery:<><rect x="2" y="6" width="18" height="12" rx="2"/><path d="M22 10v4M6 10v4m4-4v4m4-4v4"/></>,
plug:<><path d="M8 2v5m8-5v5M6 7h12v3a6 6 0 0 1-12 0V7zm6 9v6"/></>,
road:<><path d="m7 3-4 18M17 3l4 18M12 3v3m0 4v4m0 4v3"/></>,
mountain:<><path d="m2 20 7-15 5 9 3-6 5 12H2Z"/><path d="m6 11 3 2 2-3"/></>,
seat:<><path d="M8 3h5v6H8zM8 11v6h10l2 4H7a3 3 0 0 1-3-3v-7m9 2h5v4M7 21v1m10-1v1"/></>,
gear:<><path d="m9 3 1-2h4l1 2 2 1 2-1 2 3-1 2v3l2 1-1 4-2 1-1 2v2h-4l-1-2-2-1-2 1-3-3 1-2v-3L3 9l1-4 2 1 3-3Z" transform="translate(0 1) scale(.9)"/><circle cx="12" cy="12" r="3"/></>,
radar:<><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 6M7 7a7 7 0 0 0 0 10m2-8a4 4 0 0 0 0 6"/><circle cx="16" cy="7" r="1"/></>,
timer:<><circle cx="12" cy="14" r="8"/><path d="M9 2h6m-3 0v4m6 1 2-2m-8 9V9"/></>,
ruler:<><path d="m3 16 13-13 5 5L8 21 3 16Z"/><path d="m7 12 2 2m2-6 2 2m2-6 2 2"/></>,
luggage:<><rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M9 10v7m6-7v7M8 21v1m8-1v1"/></>,
light:<><path d="M13 5c-6 0-9 3-9 7s3 7 9 7V5Zm4 1 4-2m-4 6h5m-5 4h5m-5 4 4 2"/></>,
screen:<><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8m-4-4v4M6 8h5m-5 4h9"/></>,
camera:<><path d="M3 6h5l2-3h4l2 3h5v15H3V6Z"/><circle cx="12" cy="13" r="4"/></>,
phone:<><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
climate:<><path d="M12 2v20M3 7l18 10M3 17 21 7M9 4l3 3 3-3M9 20l3-3 3 3"/></>,
leaf:<><path d="M20 3C9 1 2 9 5 16s17 7 15-13Z"/><path d="M3 22 16 9"/></>,
fuel:<><path d="M3 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M2 21h13M6 6h5v5H6zM14 12h2v6a2 2 0 0 0 4 0V8l-3-3"/></>,
expand:<><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></>,
left:<path d="M19 12H5m6-6-6 6 6 6"/>,
download:<><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>,
arrow:<><path d="M5 12h14m-6-6 6 6-6 6"/></>,up:<path d="M6 18 18 6M6 6h12v12"/>,heart:<path d="m12 20-8-8a5 5 0 0 1 8-6 5 5 0 0 1 8 6z"/>,plus:<path d="M12 5v14M5 12h14"/>,check:<path d="m5 12 4 4L19 6"/>,close:<path d="m6 6 12 12M6 18 18 6"/>,sun:<><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>,moon:<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/>,menu:<path d="M4 7h16M4 12h16M4 17h16"/>,search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,car:<><path d="m3 11 3-6h12l3 6v7H3v-7zm0 0h18M5 18v2m14-2v2"/><path d="M6 14h2m8 0h2"/></>,bolt:<path d="m13 2-8 12h7l-1 8 8-12h-7z"/>,sliders:<><path d="M5 3v18M12 3v18M19 3v18"/><path d="M2 8h6m1 8h6m1-9h6"/></>,chevron:<path d="m8 5 7 7-7 7"/>,pin:<><path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 0 1 14 0Z"/><circle cx="12" cy="9" r="2"/></>,compare:<><path d="M7 4v16M17 4v16m-13-3 3 3 3-3m4-10 3-3 3 3"/></>,info:<><circle cx="12" cy="12" r="9"/><path d="M12 10v7m0-11v1"/></>};return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]??paths.arrow}</svg>;}
export function Button({children,onClick,variant='primary',disabled=false,type='button',className=''}:{children:ReactNode;onClick?:()=>void;variant?:string;disabled?:boolean;type?:'button'|'submit';className?:string}){return <button type={type} className={`button button--${variant} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>;}
export function Dialog({title,children,onClose}:{title:string;children:ReactNode;onClose:()=>void}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{const previous=document.activeElement as HTMLElement;ref.current?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;previous?.focus();};},[]);return <dialog ref={ref} className="dialog" aria-labelledby="dialog-title" onCancel={onClose} onClick={e=>{if(e.target===ref.current)onClose();}}><div className="dialog-head"><h2 id="dialog-title">{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={onClose}><Icon name="close"/></button></div>{children}</dialog>;}
export function Empty({title,children,action}:{title:string;children:ReactNode;action?:ReactNode}){return <div className="empty"><span className="empty-icon"><Icon name="car" size={32}/></span><h2>{title}</h2><p>{children}</p>{action}</div>;}
