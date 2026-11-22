import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {routeMetadata,render,ROOT} from '../.ssr/entry-server.js';
const template=await readFile('dist/index.html','utf8');
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function page(meta){const url=ROOT+meta.path;let html=template.replace(/<title>.*?<\/title>/,'<title>'+esc(meta.title)+' | Zero to FDE</title>');
 for(const [selector,value] of [['name="description"',meta.description],['name="robots"',meta.noindex?'noindex':'index,follow'],['property="og:title"',meta.title],['property="og:description"',meta.description],['property="og:type"',meta.type],['property="og:url"',url],['name="twitter:title"',meta.title],['name="twitter:description"',meta.description]])html=html.replace(new RegExp('<meta '+selector+' content="[^"]*">'),'<meta '+selector+' content="'+esc(value)+'">');
 html=html.replace(/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+esc(url)+'">');
 const schema={'@context':'https://schema.org','@type':meta.type==='article'?'LearningResource':'WebPage',name:meta.title,description:meta.description,url,isPartOf:{'@type':'WebSite',name:'Zero to FDE',url:ROOT+'/'}};
 return html.replace('</head>','<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script></head>').replace('<div id="root"></div>',()=>'<div id="root">'+render(meta.path)+'</div>');
}
for(const meta of routeMetadata){const file=join('dist',meta.path==='/'?'index.html':meta.path.slice(1)+'index.html');await mkdir(dirname(file),{recursive:true});await writeFile(file,page(meta));}
await writeFile('dist/404.html',page(routeMetadata.at(-1)));
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routeMetadata.filter(x=>!x.noindex).map(x=>'<url><loc>'+esc(ROOT+x.path)+'</loc></url>').join('')+'</urlset>');
await writeFile('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+ROOT+'/sitemap.xml\n');
await rm('.ssr',{recursive:true,force:true});
console.log('Prerendered '+routeMetadata.length+' routes.');
