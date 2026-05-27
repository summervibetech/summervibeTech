import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, service, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Summervibe Tech <contact@summervibe.tech>',
      to: 'contact@summervibe.tech',
      reply_to: email,
      subject: `Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
}
