"""Check generated HTML documents and same-site navigation without a browser."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids, self.h1 = [], [], 0
        self.title = False
        self.canonical = False

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if 'id' in data:
            self.ids.append(data['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.title = True
        if tag == 'link' and data.get('rel') == 'canonical':
            self.canonical = True
        if tag == 'a' and 'href' in data:
            self.links.append(data['href'])

base = '/forward-deployed-engineering-from-scratch'
dist = Path(__file__).resolve().parents[1] / 'dist'
pages = {}
for file in dist.rglob('index.html'):
    page = Page()
    page.feed(file.read_text(encoding='utf-8'))
    route = '/' + str(file.relative_to(dist)).removesuffix('index.html')
    assert page.h1 == 1, (route, 'H1 count', page.h1)
    assert len(page.ids) == len(set(page.ids)), (route, 'Duplicate IDs')
    assert page.title and page.canonical, (route, 'Missing metadata')
    pages[route] = page

assert len(pages) == 77, len(pages)
for route, page in pages.items():
    for href in page.links:
        url = urlsplit(href)
        if href.startswith('#'):
            assert url.fragment in page.ids, (route, 'Missing anchor', href)
        if url.path.startswith(base + '/'):
            target = url.path[len(base):]
            assert target in pages or (dist / target.lstrip('/')).exists(), (route, 'Missing route', target)
print(f'Validated {len(pages)} static pages, internal paths, anchors and headings.')
