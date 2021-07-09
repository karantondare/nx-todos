import './todos.module.css';
import { Todo } from '@karan/data';

export function Todos(props: { todos: Todo[] }) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'} key={t.title}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
