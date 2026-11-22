import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const read=async p=>readFile(resolve('..',p),'utf8');
const lessons=JSON.parse(await readFile('src/catalog.json','utf8'));
const projects=JSON.parse(await readFile('src/projects.json','utf8'));
const entries=Object.fromEntries(await Promise.all(lessons.map(async l=>{
 const dir=dirname(l.path);
 return [l.id,{exercise:await read(dir+'/exercise.md'),quiz:await read(dir+'/quiz.md')}];
})));
const briefs=Object.fromEntries(await Promise.all(projects.map(async p=>[p.title,await read(p.path)])));
const starters=Object.fromEntries(await Promise.all(projects.map(async p=>[p.title,await read(dirname(p.path)+'/code/demo.py')])));
const examples={python:await read('curriculum/assets/starter.py'),typescript:await read('curriculum/assets/starter.ts')};
const career=await read('curriculum/10-career-preparation/README.md');
const interviewQuestions=career.split('\n').filter(l=>/^\d+\.\s/.test(l)).map(l=>l.replace(/^\d+\.\s/,''));
await writeFile('src/content.generated.json',JSON.stringify({entries,briefs,starters,examples,career,interviewQuestions}));
