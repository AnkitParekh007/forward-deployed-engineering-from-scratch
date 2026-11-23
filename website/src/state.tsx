import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
export type ThemePreference='system'|'light'|'dark';
type Data={done:string[];saved:string[];recent:string[];helpful:Record<string,boolean>;theme:ThemePreference};
const initial:Data={done:[],saved:[],recent:[],helpful:{},theme:'system'};
type Workspace=Data&{toggleDone:(id:string)=>void;toggleSave:(id:string)=>void;visit:(id:string)=>void;vote:(id:string,value:boolean)=>void;setTheme:(theme:ThemePreference)=>void;ready:boolean};
const Context=createContext<Workspace|null>(null);
function readArray(key:string){try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v.filter(x=>typeof x==='string'):[]}catch{return []}}
function savedTheme():ThemePreference{const t=localStorage.getItem('fde-theme');return t==='light'||t==='dark'?t:'system'}
export function WorkspaceProvider({children}:{children:ReactNode}){
 const [data,setData]=useState<Data>(initial),[ready,setReady]=useState(false);
 useEffect(()=>{try{let helpful={};try{helpful=JSON.parse(localStorage.getItem('fde-helpful')||'{}')||{}}catch{};setData({done:readArray('fde-progress'),saved:readArray('fde-saved'),recent:readArray('fde-recent'),helpful,theme:savedTheme()});}catch{}setReady(true)},[]);
 useEffect(()=>{if(!ready)return;const media=window.matchMedia('(prefers-color-scheme: dark)');const apply=()=>{document.documentElement.dataset.theme=data.theme==='system'?(media.matches?'dark':'light'):data.theme};apply();media.addEventListener('change',apply);try{for(const [key,value] of Object.entries({'fde-progress':data.done,'fde-saved':data.saved,'fde-recent':data.recent,'fde-helpful':data.helpful}))localStorage.setItem(key,JSON.stringify(value));localStorage.setItem('fde-theme',data.theme)}catch{}return()=>media.removeEventListener('change',apply)},[data,ready]);
 const flip=(key:'done'|'saved',id:string)=>setData(old=>({...old,[key]:old[key].includes(id)?old[key].filter(x=>x!==id):[...old[key],id]}));
 return <Context.Provider value={{...data,ready,toggleDone:id=>flip('done',id),toggleSave:id=>flip('saved',id),visit:id=>setData(old=>old.recent[0]===id?old:{...old,recent:[id,...old.recent.filter(x=>x!==id)].slice(0,12)}),vote:(id,value)=>setData(old=>({...old,helpful:{...old.helpful,[id]:value}})),setTheme:theme=>setData(old=>({...old,theme}))}}>{children}</Context.Provider>
}
export function useWorkspace(){const context=useContext(Context);if(!context)throw Error('Workspace unavailable');return context}
