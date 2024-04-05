import { useEffect, useState, useCallback } from "react";
import "./pagination.scss";

type PaginationProps = {
  count: number;
  onChange: (value: number) => void;
  currentPage: number;
  variant: "rounded" | "outlined";
  color: "primary" | "secondary";
};

const Pagination = ({
  variant,
  currentPage,
  count,
  onChange,
  color,
}: PaginationProps) => {
  const [page, setPage] = useState(1);
  const [maxLength, setMaxLength] = useState(10);

  const countArray: number[] = [];
  const displayedNumbers: number[] = [];

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const calculatePaginationItems = useCallback(() => {
    for (let index = 1; index <= count; index++) {
      countArray.push(index);
    }

    if (count > maxLength) {
      const startIndex = page - 1;
      const endIndex = startIndex + maxLength;
      if (endIndex <= count) {
        displayedNumbers.push(...countArray.slice(startIndex, endIndex));
      } else {
        displayedNumbers.push(...countArray.slice(count - maxLength, count));
      }
    } else {
      displayedNumbers.push(...countArray);
    }

    return (
      <>
        {displayedNumbers.map((n) => (
          <PaginationItem
            onChange={() => onChange(n)}
            value={n}
            active={n === page}
            variant={variant}
            color={color}
          />
        ))}
      </>
    );
  }, [count, currentPage, maxLength, onChange, page, variant, color]);

  return (
    <div className="pagination">
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        disabled={page === 1}
        className={`${variant} ${color} icon-btn`}
      >
        &#129120;
      </button>
      {count > maxLength && page > 2 && <>...</>}
      {calculatePaginationItems()}
      {count > maxLength && page < count - maxLength + 1 && <>...</>}
      <button
        onClick={() => {
          if (page < count) {
            setPage(page + 1);
          }
        }}
        disabled={page === count}
        className={`${variant} ${color} icon-btn`}
      >
        &#129122;
      </button>
    </div>
  );
};

export default Pagination;

type PaginationItemProps = {
  value: number;
  active: boolean;
  onChange: () => void;
  variant: "rounded" | "outlined";
  color: "primary" | "secondary";
};
export const PaginationItem = ({
  value,
  active,
  variant,
  onChange,
  color,
}: PaginationItemProps) => {
  return (
    <p
      className={
        active
          ? `${variant} ${color} active pagination-item`
          : `${variant} ${color} pagination-item`
      }
      onClick={onChange}
    >
      {value}
    </p>
  );
};
