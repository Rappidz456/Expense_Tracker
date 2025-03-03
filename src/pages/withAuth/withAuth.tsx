import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';

export const withAuth = (Component : any) => {
  return () => {
    const router = useRouter();
    useEffect(() => {
      const user = supabase.auth.getUser();
      if (!user) router.push('/');
    }, []);
    return <Component />;
  };
};
