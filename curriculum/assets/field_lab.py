"""Seven deterministic portfolio baselines. All data is fictional; no network calls."""
from collections import Counter
from datetime import datetime
from sqlite3 import connect
from starter import triage, retrieve, create_task

POLICIES={'POL-001':'returns accepted within 30 days','POL-002':'shipping takes 3 business days','POL-003':'contact support for account changes'}

def knowledge(question):
    matches=retrieve(question,POLICIES)
    return {'evidence':[{ 'id':k,'text':POLICIES[k]} for k in matches]} if matches else {'status':'abstain'}

def onboarding(brief):
    items=[part.strip() for part in brief.split(';') if part.strip()]
    return {'draft':items,'review':'pending','missing_owner':not any(x.lower().startswith('owner:') for x in items)}

def integration(events):
    db=connect(':memory:')
    try:
        db.execute('CREATE TABLE tasks(event_id TEXT PRIMARY KEY, customer TEXT)')
        for event in events: create_task(db,event['id'],event['customer'])
        return {'tasks':db.execute('SELECT event_id, customer FROM tasks ORDER BY event_id').fetchall()}
    finally: db.close()

def feedback(records):
    result=[]
    for record in records:
        text=record['text'].lower()
        theme='performance' if 'slow' in text else 'export' if 'export' in text else 'review'
        result.append({'id':record['id'],'theme':theme})
    return {'evidence':result,'counts':dict(Counter(x['theme'] for x in result))}

def incident(events):
    timeline=sorted(events,key=lambda e:datetime.fromisoformat(e['time']))
    return {'observations':timeline,'root_cause':'unknown','next':'review correlated metrics','status':'draft'}

def capstone(request, role):
    # Local simulation of policy; not real authentication. The server must derive role from a trusted session.
    if role!='reviewer': return {'status':'denied'}
    if not isinstance(request,str) or not request.strip(): return {'status':'invalid'}
    return {'trace':'synthetic-trace-1','result':triage(request),'status':'review_required'}

DEMOS=[lambda:triage('refund invoice'),lambda:knowledge('returns'),lambda:onboarding('Company: Example Co; Requirement: CSV import'),lambda:integration([{'id':'e1','customer':'Example Co'},{'id':'e1','customer':'Example Co'}]),lambda:feedback([{'id':'1','text':'slow screen'},{'id':'2','text':'export report'}]),lambda:incident([{'time':'2026-01-01T12:00:00','event':'latency increased'}]),lambda:capstone('delivery delayed','reviewer')]

if __name__=='__main__':
    assert knowledge('returns')['evidence'][0]['id']=='POL-001'
    assert knowledge('unrelated')['status']=='abstain'
    assert onboarding('Requirement: CSV')['missing_owner']
    assert len(DEMOS[3]()['tasks'])==1
    assert sum(DEMOS[4]()['counts'].values())==2
    assert DEMOS[5]()['root_cause']=='unknown'
    assert capstone('customer data','viewer')['status']=='denied'
    assert capstone('','reviewer')['status']=='invalid'
    print('Seven portfolio baseline checks passed.')
