export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}
// interface: cannot multi type but can extend
// type Status = 'active' | 'inactive'
export type TodoListType = {
  todos: ITodo[];
  deletedHandler: (id: string) => void;
  toggleHandler: (id: string) => void;

  clearHandler: () => void;
};

export enum Filter {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}
