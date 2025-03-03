import { supabase } from '../../lib/supabase';

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const { name, user_id } = req.body;
    const { data, error } = await supabase.from('groups').insert([{ name, user_id }]);
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }
  return res.status(405).json({ message: 'Method not allowed' });
}