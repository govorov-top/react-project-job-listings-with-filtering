import { JobPosition } from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectVisiblePositions} from "../store/selectors/positions";
import {addFilter} from "../store/actions/filters";
import {selectAllFilters} from "../store/selectors/filters";

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectAllFilters);
    const positions = useSelector(state => selectVisiblePositions(state,currentFilters));

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    onHandleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    )
}

export {JobList};