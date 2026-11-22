import {describe,it,expect} from 'vitest';
import lessons from './catalog.json';
import projects from './projects.json';
describe('curriculum integrity',()=>{
  it('contains 60 unique lessons across 12 phases and 21 days',()=>{expect(lessons).toHaveLength(60);expect(new Set(lessons.map(l=>l.id)).size).toBe(60);expect(new Set(lessons.map(l=>l.phase)).size).toBe(12);expect(new Set(lessons.map(l=>l.day)).size).toBe(21)});
  it('contains all required lesson components',()=>{for(const l of lessons){for(const section of ['Why this matters','Learning objectives','Prerequisites','Concepts','Build it','Real-world scenario','Common mistakes','Checkpoint','Deliverable','Further reading'])expect(l.lesson).toContain('## '+section);expect(l.minutes).toBeGreaterThan(0)}});
  it('includes seven projects',()=>expect(projects).toHaveLength(7));
});
