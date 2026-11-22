import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
type Data={done:string[];saved:string[];recent:string[];helpful:Record<string,boolean>;theme:'light'|'dark'};
const initial:Data={done:[],saved:[],recent:[],helpful:{},theme:'light'};
type Workspace=Data&{toggleDone:(id:string)=>void;toggleSave:(id:string)=>void;visit:(id:string)=>void;vote:(id:string,value:boolean)=>void;toggleTheme:()=>void;ready:boolean};
const Context=createContext<Workspace|null>(null);
function readArray(key:string){try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'):[]}catch{return []}}
export function WorkspaceProvider({children}:{children:ReactNode}){
 const [data,setData]=useState<Data>(initial),[ready,setReady]=useState(false);
 useEffect(()=>{try{let helpful={};try{helpful=JSON.parse(localStorage.getItem('fde-helpful')||'{}')||{}}catch{};setData({done:readArray('fde-progress'),saved:readArray('fde-saved'),recent:readArray('fde-recent'),helpful,theme:localStorage.getItem('fde-theme')==='dark'||(!localStorage.getItem('fde-theme')&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'});}catch{}setReady(true)},[]);
 useEffect(()=>{if(!ready)return;document.documentElement.dataset.theme=data.theme;try{for(const [key,value] of Object.entries({'fde-progress':data.done,'fde-saved':data.saved,'fde-recent':data.recent,'fde-helpful':data.helpful}))localStorage.setItem(key,JSON.stringify(value));localStorage.setItem('fde-theme',data.theme)}catch{}},[data,ready]);
 const flip=(key:'done'|'saved',id:string)=>setData(old=>({...old,[key]:old[key].includes(id)?old[key].filter(x=>x!==id):[...old[key],id]}));
 return <Context.Provider value={{...data,ready,toggleDone:id=>flip('done',id),toggleSave:id=>flip('saved',id),visit:id=>setData(old=>old.recent[0]===id?old:{...old,recent:[id,...old.recent.filter(x=>x!==id)].slice(0,12)}),vote:(id,value)=>setData(old=>({...old,helpful:{...old.helpful,[id]:value}})),toggleTheme:()=>setData(old=>({...old,theme:old.theme==='dark'?'light':'dark'}))}}>{children}</Context.Provider>
}
export function useWorkspace(){const context=useContext(Context);if(!context)throw Error('Workspace unavailable');return context}
