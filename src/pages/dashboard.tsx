import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';
import { withAuth } from './withAuth/withAuth';

function Dashboard() {
  const [groups, setGroups] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from('groups')
        .select('*')
        .eq('user_id', user.id);
      if (!error) setGroups(data);
    }
  };

  const handleCreateGroup = async () => {
    const name = prompt('Enter group name:');
    if (name) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('groups')
          .insert([{ name, user_id: user.id }]);
        if (!error) fetchGroups();
      } else {
        console.error('User is null');
      }
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleCreateGroup}>Create Group</button>
      <ul>
        {groups.map((group) => (
          <li key={group.id} onClick={() => router.push(`/groups/${group.id}`)}>
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuth(Dashboard);