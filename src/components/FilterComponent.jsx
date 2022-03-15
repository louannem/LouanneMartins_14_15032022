export default function FilterComponent({onFilter}){
    return(
        <div>
            <input onChange={onFilter}></input>
        </div>
    )
} 