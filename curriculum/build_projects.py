from pathlib import Path
import json
ROOT=Path(__file__).resolve().parent
PROJECTS=[
('Customer Issue Triage Assistant','Support manager','Route incoming tickets to the right queue','category accuracy >= 80% on 10 labeled synthetic tickets','ticket text','category, priority and suggested action','classify with explicit keyword rules; unknown cases go to review','Compare predicted category to the labeled fixture; test empty input.'),
('Internal Knowledge Assistant','HR operations lead','Answer questions using approved policy documents','retrieve relevant document in top 3 for at least 8 of 10 questions','question and synthetic documents','answer with document IDs or abstention','rank passages by term overlap; surface supporting passages and abstain if none match','Check relevant passage IDs and an out-of-scope question.'),
('Customer Onboarding Automation','Implementation manager','Convert a customer brief into a reviewable checklist','capture at least 8 of 10 expected requirements','customer brief','draft checklist, missing fields and review state','extract labeled requirements and create a checklist requiring human approval','Check omitted requirements and reject invalid approval transitions.'),
('CRM and Workflow Integrator','Sales operations lead','Synchronize mock customer-created events to local tasks','one task per unique event; zero duplicate tasks','synthetic event ID and customer ID','stored task and processed event ID','validate events and persist unique IDs in a transaction','Deliver the same event twice; verify one task exists.'),
('AI-Powered Product Feedback Analyzer','Product manager','Group comments into themes with traceable evidence','8 of 10 comments assigned to expected themes','synthetic comment records','theme counts, evidence IDs and proposed next step','group comments with deterministic categories and preserve source IDs','Test mixed and unknown feedback; reconcile all counts.'),
('Production Incident Copilot','Service owner','Summarize synthetic alerts and draft a status update','all supplied impact facts cited and no invented root cause','synthetic timestamped log events','timeline, impact and suggested next check','sort events, summarize known facts, mark unknowns and require review','Test missing events and check that uncertain claims remain labeled.'),
('End-to-End Customer Solution','Customer sponsor','Deliver one integrated pilot backed by evidence','meet declared quality target on ten fixtures and pass access tests','synthetic customer requests','validated response, trace and review status','combine a UI, trusted API, database, model adapter, policy and telemetry','Run valid, malformed and denied access cases; test rollback.')]

def slug(s): return '-'.join(''.join(c.lower() if c.isalnum() else ' ' for c in s).split())
items=[]
for i,(title,customer,problem,metric,inputs,outputs,build,test) in enumerate(PROJECTS,1):
    folder=ROOT/'09-capstone-projects'/'portfolio'/slug(title); folder.mkdir(parents=True,exist_ok=True)
    path=folder/'README.md'
    diagram='''```mermaid\nflowchart TD\nA[Customer input] --> B[Validation]\nB --> C[Workflow service]\nC --> D[Local data and optional model adapter]\nD --> E[Policy and evaluation]\nE --> F[Reviewed output and trace]\n```'''
    path.write_text(f'# {title}\n\n## Customer brief\nThe fictional {customer} requests a pilot. Use synthetic data only.\n\n## Problem statement\n{problem}.\n\n## Success metrics\n{metric}. This is a target, not a measured result.\n\n## Technical requirements\n- Input: {inputs}.\n- Output: {outputs}.\n- Local reproducible baseline, validated input, no committed secrets.\n- Optional model adapter runs only in a trusted backend.\n\n## Architecture\n{diagram}\n\n## Step-by-step build guide\n1. Create ten labeled synthetic examples, including malformed and empty cases.\n2. Implement the baseline: {build}.\n3. Add a local CLI or UI, structured errors, and record correlation IDs.\n4. Run the test plan and record observed metrics, latency and limitations.\n5. Add optional model support only after the baseline passes.\n\n## Test plan\n{test} Record results and denominator.\n\n## Deployment\nRun and test locally. Publish the static demo on GitHub Pages; keep API credentials and privileged operations on a trusted backend if you add one. Document how to restore the last known-good release.\n\n## Demo script\nIntroduce the customer problem; run a valid example, demonstrate an error or abstention, show evaluation evidence, and explain next steps.\n\n## Retrospective\n- What did the baseline fail to handle?\n- Which assumption needs customer validation?\n- What would block a real rollout?\n\n## Portfolio description\nDesigned and implemented a simulated {title.lower()} pilot, including evaluation and documented limitations. Add measured results only after completing the tests.\n',encoding='utf-8')
    items.append(dict(title=title,customer=customer,problem=problem,metrics=metric,path=path.relative_to(ROOT.parent).as_posix(),build=build,test=test))
    code=folder/'code'; code.mkdir(exist_ok=True)
    (code/'demo.py').write_text(f'''"""Run an offline baseline for {title}."""
from pathlib import Path
import json, sys
sys.path.insert(0,str(Path(__file__).resolve().parents[4]/'assets'))
from field_lab import DEMOS
print(json.dumps(DEMOS[{i-1}](),indent=2))
''',encoding='utf-8')
    (code/'README.md').write_text('# Offline starter\n\nFrom this directory run `python3 demo.py`. Inspect the output and extend the baseline to satisfy the project test plan. No model credentials or network services are needed.\n',encoding='utf-8')
    path.write_text(path.read_text(encoding='utf-8')+'\n## Runnable starter\n\nSee [offline starter](code/README.md). Run `python3 code/demo.py` from the project folder. Extend this baseline; it is not a production application.\n',encoding='utf-8')
(ROOT.parent/'website/src/projects.json').write_text(json.dumps(items,indent=2),encoding='utf-8')
