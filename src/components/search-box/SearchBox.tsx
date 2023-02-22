import "./search-box.styles.css";
import { ChangeEvent } from "react";

type SearchBoxProps = {
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  placeholder?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const { onChangeHandler, className, placeholder } = props;
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
