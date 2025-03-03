import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import { withAuth } from '../withAuth/withAuth';

function GroupExpenses() {
  const [expenses, setExpenses] = useState<{ id: number; description: string; amount: number }[]>([]);
  const router = useRouter();
  const { groupId } = router.query;

  useEffect(() => {
    if (groupId) fetchExpenses();
  }, [groupId]);

  const fetchExpenses = async () => {
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .eq('group_id', groupId);
    if (!error) setExpenses(data);
  };

  const handleAddExpense = async () => {
    const description = prompt('Enter description:');
    const amountInput = prompt('Enter amount:');
    const amount = amountInput ? parseFloat(amountInput) : 0;
    if (description && amount) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { error } = await supabase
          .from('expenses')
          .insert([{ description, amount, group_id: groupId, user_id: user.id }]);
        if (!error) fetchExpenses();
      } else {
        console.error('User is not authenticated');
      }
    }
  };

  return (
    <div>
      <h1>Group Expenses</h1>
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuth(GroupExpenses);