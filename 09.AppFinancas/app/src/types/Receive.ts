
export type Receives = {
  id: string;
  description: string;
  value: number;
  type: 'receita' | 'despesa';
  date: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
}