function List({ items }: {
  items: {
    field: string,
    value: string | JSX.Element | undefined
  }[]
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}: </span>
          {item.value}
        </li>
      ))}
    </ul>
  )
}

export default List;