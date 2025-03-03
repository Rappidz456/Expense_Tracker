import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useRouter } from "next/router";

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) router.push("/");
      setUser(data?.user);
    };
    checkUser();
  }, []);

  return user;
}
