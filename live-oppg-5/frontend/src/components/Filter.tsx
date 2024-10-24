import { ChangeEvent, PropsWithChildren } from "react";

type FilterProps = {
    filter: string;
    options: {id:string; label: string; value: string}[];
    onFilterChange: (filter: string) => void;
};
export default function Filter(props: PropsWithChildren <FilterProps>) {

    const {onFilterChange, filter, options} = props;

    const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        onFilterChange(target.value)
    };

    return (
        <>
            <section className="filter">
                <select value={filter} onChange={handleFilter}> 
                    {[{id: "default", label: "-", value: ""}, ...options].map( //velger hvilke parametere som skal tas utgpkt. i for å mappe (id, value, label) -> er options et objekt?
                        ({id, label, value}) => (
                            <option key={id} value={value}>
                                {label}
                            </option>
                        )
                    )}
                </select>
            </section>
        </>
    )

}