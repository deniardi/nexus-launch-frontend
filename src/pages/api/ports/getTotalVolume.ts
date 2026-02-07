import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ totalVolume: number } | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Backend doesn't have volume endpoint yet, return default value
    res.status(200).json({ totalVolume: 0 });
  } catch (error) {
    console.error('Error fetching total volume:', error);
    res.status(500).json({ totalVolume: 0 });
  }
}
