export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

const API_URL = 'https://send-email-worker.juansimonberdugo.workers.dev/';

export async function sendMessage(data: ContactPayload): Promise<void> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
}
