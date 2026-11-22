import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base='http://127.0.0.1:4173/forward-deployed-engineering-from-scratch/';
test('core pages meet automated WCAG A/AA checks in both themes',async({page})=>{
 test.setTimeout(120000);
 for(const theme of ['light','dark']){
  await page.goto(base);
  const toggle=page.getByRole('button',{name:'Toggle theme'});
  if(await page.locator('html').getAttribute('data-theme')!==theme)await toggle.click();
  for(const route of ['', 'start/','curriculum/','curriculum/what-does-an-fde-do/','projects/','projects/customer-issue-triage-assistant/','practice/','practice/interview-preparation/','resources/','about/','saved/']){
   await page.goto(base+route);await expect(page.locator('html')).toHaveAttribute('data-theme',theme);
   const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
   expect(results.violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)})),theme+' '+route).toEqual([]);
  }
 }
});
