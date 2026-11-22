// Offline TypeScript example; run with a recent Node version: node starter.ts
type Contact = { id: string; name: string };
function isContact(value: unknown): value is Contact {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record.id === 'string' && record.id.length > 0 && typeof record.name === 'string' && record.name.length > 0;
}
if (!isContact({ id: 'synthetic-1', name: 'Example Customer' })) throw Error('valid case rejected');
if (isContact({ id: 42 })) throw Error('invalid case accepted');
console.log('Contact validation checks passed.');
