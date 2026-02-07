import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiUrl = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!apiUrl) {
    console.error('API_BASE_URL or NEXT_PUBLIC_API_BASE_URL is not configured');
    return res.status(500).json({ error: 'API_BASE_URL is not configured' });
  }

  const { path } = req.query;
  
  if (!path) {
    console.error('No path provided in request');
    return res.status(400).json({ error: 'No path provided' });
  }

  const apiPath = Array.isArray(path) ? path.join('/') : path;
  const url = `${apiUrl}/api/${apiPath}`;
  
  try {
    console.log(`Proxying ${req.method} request to:`, url);
    
    const response = await axios({
      method: req.method,
      url: url,
      params: req.query,
      data: req.body,
      headers: {
        ...req.headers,
        host: new URL(apiUrl).host,
      },
    });

    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Proxy Error:', {
      method: req.method,
      url,
      error: error.message,
      status: error.response?.status,
      data: error.response?.data
    });

    return res.status(error.response?.status || 500).json(error.response?.data || {
      error: 'Internal Server Error',
      message: error.message
    });
  }
}
