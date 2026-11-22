import {describe,it,expect} from 'vitest';
import {tracks,milestones,modules,diagnostics,scenarios} from './journey-data';
import {lessons,routeMetadata,search} from './model';
describe('evidence journey',()=>{
 it('maps all 60 core lessons to exactly one milestone',()=>{expect(tracks).toHaveLength(5);expect(milestones).toHaveLength(6);for(const l of lessons)expect(milestones.filter(m=>(m.phases as readonly number[]).includes(l.phase))).toHaveLength(1)});
 it('provides twelve depth modules and balanced diagnostics',()=>{expect(modules).toHaveLength(12);expect(diagnostics).toHaveLength(10);for(let i=0;i<5;i++)expect(diagnostics.filter(q=>q.skill===i)).toHaveLength(2);for(const q of diagnostics)expect(q.correct).toBeLessThan(q.choices.length);for(const q of scenarios)expect(q.correct).toBeLessThan(q.options.length)});
 it('has static journey routes and searchable modules',()=>{expect(routeMetadata.filter(r=>r.path.startsWith('/journey/'))).toHaveLength(4);expect(search('token economics').some(r=>r.group==='Professional depth')).toBeTruthy()});
});
