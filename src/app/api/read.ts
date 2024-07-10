import type { NextApiRequest, NextApiResponse } from 'next';
import pool from './db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await pool.query('SELECT * FROM your_table');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
