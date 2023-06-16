import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFilters } from "../store/selectors/filters";
import { cleatFilter, removeFilter } from "../store/actions/filters";

const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectAllFilters);
    if (!currentFilters.length) {
        return null;
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge
                            onClear={() => dispatch(removeFilter(filter))}
                            key={filter}
                            variant="clearable"
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button className="link" onClick={() => dispatch(cleatFilter)}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };