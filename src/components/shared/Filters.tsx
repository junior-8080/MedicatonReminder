import React, {useState} from "react";
import {FilterType} from "@/lib/type";

type Props = {
    filters: FilterType[],
    onChange: (filter:FilterType) => void
}
const Filters = ({filters,onChange}:Props) => {
    const [activeFilter,setActiveFilters ] = useState<FilterType>(filters[0])
    const handleChange = (filter:FilterType) => {
         setActiveFilters(filter);
         onChange(filter)
    }
    return  <div className="border border-1-[##E7E7E7] p-1 rounded-lg">
        {filters.map((filter) => {
            return <button key={filter.id} className={`px-8 py-1 text-sm rounded-md ${activeFilter.id === filter.id ? "bg-button-dark text-white" :" bg-white text-light-secondary font-medium border-none shadow-none"}`} onClick={() => handleChange(filter)}>
                {filter.label}
            </button>
        })}
    </div>
}

export default  Filters