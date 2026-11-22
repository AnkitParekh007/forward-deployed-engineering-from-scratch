import lessons from './catalog.json';
import projects from './projects.json';
import extras from './content.generated.json';
export {lessons,projects,extras};
export type Lesson=typeof lessons[number];
export type Project=typeof projects[number];
export const BASE='/forward-deployed-engineering-from-scratch';
export const ORIGIN='https://ankitparekh007.github.io';
export const ROOT=ORIGIN+BASE;
export const REPO='https://github.com/AnkitParekh007/forward-deployed-engineering-from-scratch';
export const slug=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const lessonUrl=(l:Lesson)=>'/curriculum/'+slug(l.title)+'/';
export const projectUrl=(p:Project)=>'/projects/'+slug(p.title)+'/';
export const phases=Array.from(new Set(lessons.map(l=>l.phase))).map(id=>({id,title:lessons.find(l=>l.phase===id)!.phaseTitle,lessons:lessons.filter(l=>l.phase===id)}));
export const resources=[
['Git','Version control','https://git-scm.com/book/en/v2'],['Python','Programming','https://docs.python.org/3/tutorial/'],['TypeScript','Programming','https://www.typescriptlang.org/docs/'],['PostgreSQL','Data','https://www.postgresql.org/docs/current/tutorial.html'],['GitHub Actions','Delivery','https://docs.github.com/en/actions'],['MCP','AI integrations','https://modelcontextprotocol.io/'],['OpenTelemetry','Reliability','https://opentelemetry.io/docs/'],['Docker','Delivery','https://docs.docker.com/get-started/'],['NIST AI RMF','Responsible AI','https://www.nist.gov/itl/ai-risk-management-framework']
] as const;
export const paths=[
{id:'essentials',title:'FDE Essentials',length:'7 days',level:'Getting started',description:'Explore the role, build foundations and discover a customer problem.',days:7},
{id:'practitioner',title:'FDE Practitioner',length:'21 days',level:'Core curriculum',description:'Follow all 60 lessons, from discovery through a customer-ready capstone.',days:21},
{id:'accelerator',title:'FDE Accelerator',length:'30 days',level:'Working engineer',description:'Use the core curriculum and reserve nine additional days for independent project practice.',days:21}
];
export const nav=[['/start/','Start here'],['/curriculum/','Curriculum'],['/projects/','Projects'],['/practice/','Practice'],['/resources/','Resources'],['/about/','About']] as const;
export const normalize=(p:string)=>p==='/'?p:p.replace(/\/+$/,'')+'/';
export const legacyRoute=(hash:string):string|null=>{
  const route=hash.replace(/^#/,'').split('?')[0];
  if(route==='/')return '/';
  if(route.startsWith('/lesson/')){const l=lessons.find(x=>x.id===route.split('/')[2]);return l?lessonUrl(l):'/not-found/'}
  const p=normalize(route);return nav.some(([u])=>u===p)?p:null;
};
export type Meta={title:string;description:string;path:string;type:'website'|'article';noindex?:boolean};
const entry=(path:string,title:string,description:string,type:Meta['type']='website'):Meta=>({path,title,description,type});
export const routeMetadata:Meta[]=[
entry('/','Zero to FDE','A practical, production-focused field guide for becoming a Forward Deployed Engineer.'),
entry('/start/','Start your FDE learning path','Choose a learning path based on your experience and goals.'),
entry('/curriculum/','FDE curriculum','Explore 12 phases and 60 practical lessons, with exercises and checkpoints.'),
entry('/projects/','Portfolio projects','Seven synthetic customer engagements with runnable offline baselines.'),
entry('/practice/','Field drills and practice','Practise existing exercises, quizzes and customer delivery scenarios.'),
entry('/practice/interview-preparation/','Interview preparation','Practise five existing FDE interview questions and prepare an evidence-based portfolio walkthrough.'),
entry('/resources/','Engineering resource library','Find official documentation, tools and offline code examples.'),
entry('/about/','About Zero to FDE','Learn about the mission, roadmap, and how to contribute.'),
entry('/saved/','Your learning workspace','Return to saved and recently viewed lessons.'),
...lessons.map(l=>entry(lessonUrl(l),l.title,l.deliverable,'article')),
...projects.map(p=>entry(projectUrl(p),p.title,p.problem,'article')),
{...entry('/not-found/','Page not found','Return to the curriculum or search for learning material.'),noindex:true}
];
export const metadata=(path:string)=>routeMetadata.find(x=>x.path===normalize(path))??routeMetadata[routeMetadata.length-1];
export const searchItems=[
...lessons.map(l=>({title:l.title,detail:l.phaseTitle,text:l.lesson+' '+l.prerequisites+' '+l.project,href:lessonUrl(l),group:'Lessons'})),
...projects.map(p=>({title:p.title,detail:p.problem,text:p.build+' '+p.metrics,href:projectUrl(p),group:'Projects'})),
...resources.map(([name,category,href])=>({title:name,detail:category,text:'Official documentation '+name,href,group:'Resources'})),
...extras.interviewQuestions.map(q=>({title:q,detail:'Mock interview',text:q,href:'/practice/interview-preparation/',group:'Interview questions'})),
...lessons.map(l=>({title:'Exercise: '+l.title,detail:'Field drill',text:l.deliverable,href:'/practice/?lesson='+l.id,group:'Field drills'}))
];
export function search(query:string){const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!terms.length)return [];return searchItems.map(item=>({item,score:terms.reduce((s,t)=>s+(item.title.toLowerCase().includes(t)?5:0)+(item.detail.toLowerCase().includes(t)?2:0)+(item.text.toLowerCase().includes(t)?1:0),0)})).filter(({item})=>terms.every(t=>(item.title+' '+item.detail+' '+item.text).toLowerCase().includes(t))).sort((a,b)=>b.score-a.score).slice(0,30).map(x=>x.item)}

export const lessonExtras=extras.entries as Record<string,{exercise:string;quiz:string}>;
export const projectBriefs=extras.briefs as Record<string,string>;
