# Isabella - components

### Pagination

!["Pagination img"](src\assets\Skärmbild 2024-04-08 112556.png)

```js
type PaginationProps = {
  count: number,
  onChange: (value: number) => void,
  currentPage: number,
  variant: "rounded" | "square",
  color: "primary" | "secondary",
  max?: number,
  siblingCount?: number,
};
```

count - Number of pagination items
onChange - function to handle click on pagination item
max - number of visible pagination items (default 5)
siblingCount - number of visible pagination items before and after current (default 2)
