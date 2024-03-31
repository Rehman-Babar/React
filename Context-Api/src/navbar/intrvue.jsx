import React, { useState } from 'react'

const Intervue = () => {
    const [country, setcountry] = useState("");

    const countries = [
        
        { name:"Pkistan", value:'PK', citys:['mombay', 'delhi' ]},
        { name:"India", value:'IN', citys:['mombay', 'delhi' ]},
        { name:"BanglaDash", value:'BD', citys:['mombay', 'delhi']}
    ];
    function handleData(e){
        console.log(e.target.value);
        setcountry(e.target.value)
    }
  return (
    <div>
            <select  onChange={handleData}>
                {
                    countries.map((item, index) =>{
                        return(<option value={item.value}>{item.name}</option>)
                    })
                }
            </select>

            <select  onChange={handleData}>
                {
                    countries.map((item, index) =>{
                        return(<option value={item.index}>{item.citys}</option>)
                    })
                }
            </select>


    </div>
  )
}

export default Intervue