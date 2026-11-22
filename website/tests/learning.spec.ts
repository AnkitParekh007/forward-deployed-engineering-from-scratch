import {test,expect} from '@playwright/test';
const base='http://127.0.0.1:4173/forward-deployed-engineering-from-scratch/';
test('learning progress, bookmarks, deep links, filters and theme',async({page})=>{
 await page.goto(base);await expect(page.getByRole('heading',{level:1})).toContainText('Forward Deployed Engineer');
 await page.getByRole('link',{name:'Start the learning path'}).click();await page.getByRole('link',{name:'Open the first lesson'}).click();
 await expect(page.getByRole('heading',{name:'What does an FDE do?',level:1})).toBeVisible();
 await page.getByRole('button',{name:'Mark complete',exact:true}).click();await page.getByRole('button',{name:'Save lesson'}).click();await page.reload();
 await expect(page.getByRole('button',{name:'✓ Completed — undo'})).toBeVisible();await expect(page.getByRole('button',{name:'★ Saved'})).toBeVisible();
 await page.goto(base+'saved/');await expect(page.getByRole('link',{name:/What does an FDE do/}).first()).toBeVisible();
 await page.goto(base+'curriculum/');await page.getByRole('searchbox',{name:'Search lessons'}).fill('retrieval');await expect(page.locator('a[href$="/curriculum/retrieval-augmented-generation/"]')).toBeVisible();
 await page.getByRole('searchbox',{name:'Search lessons'}).fill('zz-no-match');await expect(page.getByRole('heading',{name:'No matching lessons'})).toBeVisible();
 await page.goto(base+'#/lesson/01-01');await expect(page.getByRole('heading',{name:'What does an FDE do?',level:1})).toBeVisible();await expect(page).toHaveURL(/curriculum\/what-does-an-fde-do\/$/);
 await page.getByRole('button',{name:/Toggle theme/}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
});
test('search keyboard navigation and skip link',async({page})=>{
 await page.goto(base);await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();await expect(page).toHaveURL(base);
 await page.keyboard.press('/');await expect(page.getByRole('dialog',{name:'Search the field guide'})).toBeVisible();await page.getByRole('searchbox',{name:/Search lessons, projects/}).fill('retrieval');await expect(page.getByRole('button',{name:/Retrieval-augmented generation/}).first()).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog',{name:'Search the field guide'})).not.toBeVisible();
});
test('interactive project and existing practice material',async({page})=>{
 await page.goto(base+'projects/customer-issue-triage-assistant/');await page.locator('.lab summary').click();await page.getByRole('button',{name:'Run example'}).click();await expect(page.locator('.lab pre')).toContainText('Billing');
 await page.goto(base+'practice/?lesson=01-01');await expect(page.getByRole('heading',{name:'What does an FDE do?',exact:true})).toBeVisible();
 await page.goto(base+'practice/interview-preparation/');await expect(page.getByText('A customer asks for an AI chatbot.',{exact:false})).toBeVisible();
});
test('responsive navigation and overflow',async({page})=>{
 test.setTimeout(90000);
 for(const width of [320,375,768,1280,1920]){await page.setViewportSize({width,height:812});for(const route of ['', 'curriculum/','curriculum/what-does-an-fde-do/','projects/','practice/','resources/','about/']){await page.goto(base+route);expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);}}
 await page.setViewportSize({width:320,height:812});await page.goto(base);await page.getByRole('button',{name:'Open navigation menu'}).click();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('navigation',{name:'Mobile navigation'})).not.toBeVisible();
});
test('static metadata and independently readable page',async({request})=>{const response=await request.get(base+'curriculum/what-does-an-fde-do/');expect(response.ok()).toBeTruthy();const html=await response.text();expect(html).toContain('What does an FDE do? | Zero to FDE');expect(html).toContain('Why this matters');expect(html).toContain('rel="canonical"');expect((await request.get(base+'sitemap.xml')).ok()).toBeTruthy()});

test('support card links to the maintainer and fits mobile in both themes',async({page})=>{
 await page.setViewportSize({width:320,height:812});await page.goto(base);
 for(const theme of ['light','dark']){
  if(await page.locator('html').getAttribute('data-theme')!==theme)await page.getByRole('button',{name:/Toggle theme/}).click();
  const support=page.getByRole('region',{name:'Keep learning free and open.'});await expect(support).toBeVisible();
  await expect(support.getByRole('link',{name:'Buy me a coffee'})).toHaveAttribute('href','https://buymeacoffee.com/ankitparekh');
  await expect(support.getByRole('link',{name:'GitHub Sponsors'})).toHaveAttribute('href','https://github.com/sponsors/AnkitParekh007');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
 }
});

test('homepage hero starts near header and aligns with learning workspace',async({page})=>{
 for(const width of [1280,1440,1920]){
  await page.setViewportSize({width,height:900});await page.goto(base);
  const layout=await page.evaluate(()=>{const header=document.querySelector('header')!.getBoundingClientRect();const title=document.querySelector('.hero h1')!.getBoundingClientRect();const intro=document.querySelector('.hero > div:first-child')!.getBoundingClientRect();const preview=document.querySelector('.hero .field-preview')!.getBoundingClientRect();const cta=document.querySelector('.hero .actions')!.getBoundingClientRect();return {gap:title.top-header.bottom,alignment:Math.abs(intro.top-preview.top),ctaBottom:cta.bottom}});
  expect(layout.gap).toBeLessThanOrEqual(110);expect(layout.alignment).toBeLessThanOrEqual(2);expect(layout.ctaBottom).toBeLessThanOrEqual(900);
 }
 await page.setViewportSize({width:375,height:812});await page.goto(base);
 const mobileGap=await page.evaluate(()=>document.querySelector('.hero h1')!.getBoundingClientRect().top-document.querySelector('header')!.getBoundingClientRect().bottom);expect(mobileGap).toBeLessThanOrEqual(90);
});

test('interactive motion responds to hover, focus and reduced motion',async({page})=>{
 await page.setViewportSize({width:1440,height:900});await page.goto(base);
 const cta=page.getByRole('link',{name:'Start the learning path'});
 await cta.hover();await expect.poll(()=>cta.evaluate(el=>getComputedStyle(el).transform)).not.toBe('none');
 await page.mouse.move(0,0);await cta.focus();await expect(cta).toBeFocused();
 const card=page.locator('.project-grid .card').first();await card.hover();await expect.poll(()=>card.evaluate(el=>getComputedStyle(el).transform)).not.toBe('none');
 await page.emulateMedia({reducedMotion:'reduce'});await cta.hover();await expect.poll(()=>cta.evaluate(el=>getComputedStyle(el).transform)).toBe('none');
 await card.hover();await expect.poll(()=>card.evaluate(el=>getComputedStyle(el).transform)).toBe('none');
});
