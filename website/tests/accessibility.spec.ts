import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base='http://127.0.0.1:4173/forward-deployed-engineering-from-scratch/';
test('core pages meet automated WCAG A/AA checks in both themes',async({page})=>{
 test.setTimeout(120000);
 const violations:unknown[]=[];
 for(const theme of ['light','dark']){
  await page.goto(base);
  await page.getByRole('button',{name:theme==='light'?'Light theme':'Dark theme'}).click();
  for(const route of ['', 'start/','curriculum/','curriculum/what-does-an-fde-do/','projects/','projects/customer-issue-triage-assistant/','practice/','practice/interview-preparation/','resources/','about/','saved/']){
   await page.goto(base+route);await expect(page.locator('html')).toHaveAttribute('data-theme',theme);
   const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
   if(results.violations.length)violations.push({theme,route,issues:results.violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)}))});
  }
 }
 expect(violations).toEqual([]);
});

test('system mode follows device appearance and explicit modes persist',async({page})=>{
 await page.emulateMedia({colorScheme:'light'});
 await page.goto(base);
 await page.getByRole('button',{name:'System theme'}).click();
 await expect(page.getByRole('button',{name:'System theme'})).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 await page.emulateMedia({colorScheme:'dark'});
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await page.getByRole('button',{name:'Light theme'}).click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 await page.reload();
 await expect(page.getByRole('button',{name:'Light theme'})).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('html')).toHaveAttribute('data-theme','light');
 await page.getByRole('button',{name:'System theme'}).click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
});
