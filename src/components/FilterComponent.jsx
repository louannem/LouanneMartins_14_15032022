export default function FilterComponent({onFilter}){
    return(
        <div>
            <span>Search : </span>
            <input onChange={onFilter}></input>
        </div>
    )
} 