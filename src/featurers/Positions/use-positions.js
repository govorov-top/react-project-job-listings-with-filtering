import {useSelector} from "react-redux";
import {selectAllFilters} from "../Filter/filter-slice";
import {selectVisiblePositions} from "./position-slice";

export const usePositions = () => {
    const currentFilters = useSelector(selectAllFilters);
    return useSelector(state => selectVisiblePositions(state,currentFilters));
}