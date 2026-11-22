import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base='http://127.0.0.1:4173/forward-deployed-engineering-from-scratch/';
test('track choice and evidence notes persist',async({page})=>{
 await page.goto(base+'journey/');await page.getByRole('button',{name:/Principal \/ field architect/}).click();await expect(page.getByRole('button',{name:/Principal \/ field architect/})).toHaveAttribute('aria-pressed','true');
 await page.getByRole('textbox',{name:'Evidence notes for Understand and build'}).fill('A synthetic artifact and test result.');await page.reload();await expect(page.getByRole('textbox',{name:'Evidence notes for Understand and build'})).toHaveValue('A synthetic artifact and test result.');await expect(page.getByRole('button',{name:/Principal \/ field architect/})).toHaveAttribute('aria-pressed','true');
});
test('diagnostic, professional evidence, and field practice',async({page})=>{
 await page.goto(base+'journey/diagnostic/');for(const group of await page.locator('fieldset').all())await group.getByRole('radio').first().check();await page.getByRole('button',{name:'Review my results'}).click();await expect(page.getByRole('heading',{name:/Your practice profile/})).toBeVisible();
 await page.goto(base+'journey/pro/');await page.getByRole('textbox',{name:'Evidence for Model internals and token economics'}).fill('Synthetic cost worksheet');await page.getByRole('checkbox',{name:'I independently reviewed this evidence.'}).first().check();await page.reload();await expect(page.getByRole('checkbox',{name:'I independently reviewed this evidence.'}).first()).toBeChecked();
 await page.goto(base+'journey/field-lab/');await page.getByRole('radio',{name:'Share both metrics, explain uncertainty and propose a bounded follow-up pilot'}).check();await expect(page.getByText(/Good decision/)).toBeVisible();await page.getByRole('button',{name:'Start 45-minute practice'}).click();await expect(page.getByLabel('Time remaining')).toContainText(/44:|45:/);await page.getByRole('button',{name:'Stop timer'}).click();await expect(page.getByLabel('Time remaining')).toHaveText('Untimed');
});
test('journey routes are responsive and pass automated accessibility',async({page})=>{
 test.setTimeout(120000);const violations:unknown[]=[];
 for(const theme of ['light','dark']){await page.goto(base);if(await page.locator('html').getAttribute('data-theme')!==theme)await page.getByRole('button',{name:/Toggle theme/}).click();for(const path of ['journey/','journey/diagnostic/','journey/pro/','journey/field-lab/']){await page.setViewportSize({width:320,height:812});await page.goto(base+path);await expect(page.locator('html')).toHaveAttribute('data-theme',theme);expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);await page.setViewportSize({width:1440,height:900});const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();if(result.violations.length)violations.push({theme,path,issues:result.violations.map(v=>({id:v.id,targets:v.nodes.map(n=>n.target)}))})}}expect(violations).toEqual([]);
});
