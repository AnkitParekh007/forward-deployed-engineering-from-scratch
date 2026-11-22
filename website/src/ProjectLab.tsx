import {useState} from 'react';

const examples=['Refund requested for invoice 123','How many days can I return a purchase?','Company: Example Co; Requirement: CSV import; Owner: Pat','event-001','The dashboard is slow, and export takes too long','14:00 request latency increased; 14:05 error rate increased','I need help importing customer data'];
function evaluate(index:number,input:string){
  const text=input.trim();if(!text)return {status:'Review',reason:'No input supplied'};
  const lower=text.toLowerCase();
  switch(index){
    case 0:return {category:/refund|invoice/.test(lower)?'Billing':/delivery|shipment/.test(lower)?'Shipping':'Review',next:'Confirm classification with operator'};
    case 1:return /return|refund/.test(lower)?{evidence:'POL-001 (fictional policy)',answer:'Returns accepted within 30 days in this synthetic policy.'}:{status:'Abstain',reason:'No supporting document'};
    case 2:return {draft:text.split(';').map(s=>s.trim()).filter(Boolean),status:'Awaiting human review'};
    case 3:return {eventId:text,taskId:`draft-${text}`,status:'Dry run only; deterministic task ID for duplicate detection'};
    case 4:return {themes:[/slow|latency/.test(lower)?'Performance':null,/export/.test(lower)?'Data export':null].filter(Boolean),source:'DEMO-001',status:'Review themes'};
    case 5:return {observations:text.split(';').map(s=>s.trim()),rootCause:'Unknown',next:'Check correlated service metrics; review before sharing'};
    default:return {request:text,route:'Manual pilot review',trace:'DEMO-001',status:'No external actions taken'};
  }
}
export default function ProjectLab({index}:{index:number}){const [input,setInput]=useState(examples[index]??'');const [result,setResult]=useState<Record<string,unknown>|null>(null);return <details className="lab"><summary>Try the offline baseline</summary><p>Safe synthetic demonstration, not an AI model or live integration.</p><label>Sample input<textarea rows={3} value={input} onChange={e=>setInput(e.target.value)}/></label><button className="button secondary" onClick={()=>setResult(evaluate(index,input))}>Run example</button>{result&&<pre aria-live="polite" tabIndex={0}>{JSON.stringify(result,null,2)}</pre>}<div className="architecture" role="group" aria-label="Architecture: input, validation, workflow, reviewed output"><span>Input</span>→<span>Validate</span>→<span>Workflow</span>→<span>Review</span></div></details>}
