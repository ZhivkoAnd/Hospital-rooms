import Search from "./SearchInput";
import Filters from "./FilterBar";
import { FilterProps } from "../../types";

const ActionBar = ({ inputQuery, setInputQuery }: FilterProps) => {
  return (
    <div className="action-bar">
      <Search inputQuery={inputQuery} setInputQuery={setInputQuery} />
    </div>
  );
};

export default ActionBar;
