import React, {useState} from 'react'
import '../App.css';

const Career = ()=>{

    const [salary1, setSalary1] = useState('');
    const [salary2, setSalary2] = useState('');
    const handleSpouse1 = (e) => {setSalary1(e.target.value)};
    const handleSpouse2 = (e) => {setSalary2(e.target.value)};

    return(
        <div>
            <div id="spouse1">
                Spouse 1: <input type="number" value={salary1} onChange={handleSpouse1}/>
            </div>
            <div  id="spouse2">
                Spouse 2: <input type="number" value={salary2} onChange={handleSpouse2}/>
            </div>    
        </div>
    )
}

export default Career;