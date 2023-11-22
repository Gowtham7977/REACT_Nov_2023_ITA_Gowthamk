import {useState} from 'react';
export default function Toggle4()
{
    const[count,SetCount]=useState(1);
    const[form,SetForm]=useState("GOWTHAM");
    function counter()
    {
        if(count===1)
        {
            if(form==="GOWTHAM")
                SetForm("SIRI")
            else
                SetForm("GOWTHAM");
            SetCount(1);
        }
        else{
            let v=count;
            SetCount(++v);
        }
    }
    return(
        <div>
            <h1>Toggle on 1 clicks</h1>
            <hr />
            <h1>{form}</h1>
            <button onClick={counter}>Toggle on 1</button>
        </div>
    )
}