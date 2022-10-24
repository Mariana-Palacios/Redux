import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumbers } from "../features/tasks/numberSlice";
import { v4 as uuid } from "uuid";

const NumberForm = () =>{
    const [operation, setOPeration] = useState({
        suma: "",
        resta: "",
        division: "",
        x: "",
    })

    const selector = useSelector((state)=>state.numbers)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setOPeration({
          ...operation,
          [e.target.name]: e.target.value,
        });
        console.log(e.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch( addNumbers({
            ...operation,
            id: uuid()
        }))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    suma+x:
                    <input type='number' name='suma' value={operation.suma} onChange={handleChange}/>
                </label>
                <label>
                    resta-x:
                    <input type='number' name='resta' value={operation.resta} onChange={handleChange}/>
                </label>
                <label>
                    division/x:
                    <input type='number' name='division' value={operation.division} onChange={handleChange}/>
                </label>
                <label>
                    x:
                    <input type='number' name='x' value={operation.division} onChange={handleChange}/>
                </label>
                <button>
                    submit
                </button>
            </form>      
        </div>
    )
}

export default NumberForm