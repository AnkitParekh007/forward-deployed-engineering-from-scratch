"""Offline, synthetic starter examples. Run: python3 starter.py"""
import sqlite3
from collections import Counter
from math import sqrt

def triage(text):
    if not isinstance(text,str) or not text.strip(): return {'category':'review','reason':'missing input'}
    terms={'billing':('invoice','refund'),'shipping':('delivery','shipment'),'account':('login','password')}
    matches=[k for k,words in terms.items() if any(w in text.lower() for w in words)]
    return {'category':matches[0] if len(matches)==1 else 'review','reason':'baseline keyword match'}

def retrieve(question, docs):
    tokens=set(question.lower().split())
    scored=[(len(tokens & set(text.lower().split())),key) for key,text in docs.items()]
    return [key for score,key in sorted(scored,reverse=True)[:3] if score>0]

def create_task(db, event_id, customer):
    if not event_id or not customer: raise ValueError('missing field')
    with db: db.execute('INSERT OR IGNORE INTO tasks VALUES (?, ?)',(event_id,customer))

def cosine(a,b):
    if len(a)!=len(b): raise ValueError('vector dimensions differ')
    denom=sqrt(sum(x*x for x in a)*sum(y*y for y in b))
    return sum(x*y for x,y in zip(a,b))/denom if denom else 0

if __name__=='__main__':
    assert triage('refund request')['category']=='billing'
    assert triage('')['category']=='review'
    assert retrieve('leave policy',{'a':'leave policy','b':'shipping'})==['a']
    assert retrieve('unknown',{'a':'shipping'})==[]
    db=sqlite3.connect(':memory:'); db.execute('CREATE TABLE tasks(event_id TEXT PRIMARY KEY, customer TEXT)')
    create_task(db,'event-1','synthetic-company'); create_task(db,'event-1','synthetic-company')
    assert db.execute('SELECT COUNT(*) FROM tasks').fetchone()[0]==1
    assert cosine([1,0],[.8,.2])>cosine([1,0],[0,1])
    print('All offline starter checks passed.')
