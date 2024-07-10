import type { NextApiRequest, NextApiResponse } from 'next';
import pool from './db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, value } = req.body;

  if (!name || !value) {
    return res.status(400).json({ error: 'Name and value are required' });
  }

  try {
    const [result] = await pool.query('INSERT INTO your_table (name, value) VALUES (?, ?)', [name, value]);
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert data' });
  }
}
