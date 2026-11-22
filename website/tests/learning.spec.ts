import {test,expect} from '@playwright/test';
test('learner can open lesson, save progress, filter curriculum and view projects',async({page})=>{
  await page.goto('/');await expect(page.getByRole('heading',{name:'From Curious to Customer-Ready.'})).toBeVisible();
  await page.getByRole('link',{name:'Start the Curriculum'}).click();await expect(page.getByRole('heading',{name:'What does an FDE do?'})).toBeVisible();
  await page.getByRole('button',{name:'Mark complete'}).click();await page.reload();await expect(page.getByRole('button',{name:'✓ Completed — undo'})).toBeVisible();
  await page.getByRole('link',{name:'Curriculum',exact:true}).click();await page.getByRole('textbox',{name:'Search'}).fill('retrieval');await expect(page.getByRole('link',{name:'Retrieval-augmented generation'})).toBeVisible();
  await page.getByRole('link',{name:'Projects',exact:true}).click();await expect(page.getByRole('heading',{name:'Customer Issue Triage Assistant'})).toBeVisible();
  await page.getByRole('button',{name:'Toggle theme'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
});
test('mobile navigation has no horizontal overflow',async({page})=>{await page.setViewportSize({width:375,height:812});await page.goto('/');await expect(page.getByRole('link',{name:'Curriculum',exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(375)});
