export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Clé API Gemini manquante sur le serveur' });

  try {
    // Récupère le prompt envoyé par l'app
    const { prompt } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1400,
          },
        }),
      }
    );

    const data = await response.json();

    // Extrait le texte de la réponse Gemini
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

    // Renvoie dans le même format que l'app attend
    return res.status(200).json({ text });

  } catch (error) {
    return res.status(500).json({ error: 'Erreur serveur : ' + error.message });
  }
}
