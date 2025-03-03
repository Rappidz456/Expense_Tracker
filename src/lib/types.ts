export interface Group {
    id: number;
    name: string;
    user_id: string;
  }
  
  export interface Expense {
    id: number;
    description: string;
    amount: number;
    group_id: number;
    user_id: string;
  }