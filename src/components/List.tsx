import { ReactNode} from "react";

//GENERICS

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

//the comma after the first t is CRUCIAL, helps it recognise its a generic

const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List