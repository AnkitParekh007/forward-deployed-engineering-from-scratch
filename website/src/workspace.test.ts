import {describe,it,expect} from 'vitest';
import {lessons,projects,routeMetadata,legacyRoute,lessonUrl,search,paths,extras} from './model';
describe('redesign content and URL compatibility',()=>{
 it('preserves every lesson and project with unique static paths',()=>{expect(lessons).toHaveLength(60);expect(projects).toHaveLength(7);expect(new Set(routeMetadata.map(p=>p.path)).size).toBe(routeMetadata.length);for(const l of lessons)expect(legacyRoute('#/lesson/'+l.id)).toBe(lessonUrl(l))});
 it('preserves every exercise, quiz, brief and interview question',()=>{expect(Object.keys(extras.entries)).toHaveLength(60);expect(Object.keys(extras.briefs)).toHaveLength(7);expect(extras.interviewQuestions).toHaveLength(5)});
 it('exposes distinct paths and full-content search',()=>{expect(lessons.filter(l=>l.day<=paths[0].days)).toHaveLength(20);expect(search('retrieval').some(x=>x.group==='Lessons')).toBeTruthy();expect(search('zz-no-match')).toHaveLength(0)});
});
