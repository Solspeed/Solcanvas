// pages/api/projects.js
import supabase from  '../../../supabase'

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('project_listing')
    .select('*');

  if (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'An error occurred while fetching the projects.' });
    return;
  }

  res.status(200).json(data);
}