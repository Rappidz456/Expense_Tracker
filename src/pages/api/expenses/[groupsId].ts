import { supabase } from "../../../lib/supabase";

export default async function handler(req: any, res: any) {
  const { groupId } = req.query;
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("group_id", groupId);
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const { description, amount, user_id } = req.body;
    const { data, error } = await supabase
      .from("expenses")
      .insert([{ description, amount, group_id: groupId, user_id }]);
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
