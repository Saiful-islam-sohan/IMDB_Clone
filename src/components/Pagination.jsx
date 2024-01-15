import { useState } from "react";


const Pagination = () => {
    const [pageNumber, setPage]=useState(1)

    const onPrev=()=>{
        if(pageNumber>1)
        {
            setPage(pageNumber-1)
        }
    }

    const onNext =()=>{
        setPage(pageNumber+1)
    }
    
    return (
        <>
            <div className="flex items-center justify-center mt-8">
                <button className="p-1 border border-r-0 border-blue-400 rounded-lg" onClick={onPrev}>Previous</button>
                <span className="p-1 border border-r-0 border-blue-400 rounded-lg">{pageNumber}</span>
                <button className="p-1 border border-blue-400 rounded-lg" onClick={onNext}>Next</button>
            </div>
        </>
    );
};

export default Pagination;