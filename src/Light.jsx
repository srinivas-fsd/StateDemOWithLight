import {useState} from 'react';
function Light()
{
    //Declaring State for LightOnOff, Color and Opcaity with default values 'On','Red' and 1
    const [lightSwitch,setLightSwitch] = useState(true);
    const [lightColor,setLightColor] = useState("red");
    const [lightOpacity,setLightOpacity] = useState(1);


    //Writing functions to change the State value of LightOnOff, Color and Opcaity by using parameter value
    let handleLightSwitch = (switchAction)=>{
       setLightSwitch(switchAction);
    };

    let handleLightColor= (lightColor)=>{
        if(lightSwitch===true)
        {
            setLightColor(lightColor);
        }   
     };

     let increaseOpacity= ()=>{
        if(lightOpacity<1)
        {
            const val = +(lightOpacity)+(+(0.1));
            setLightOpacity(val.toFixed(1));
        }
       
     };

     let decreaseOpacity= ()=>{
        if(lightOpacity>0.1)
            {
               
             setLightOpacity((lightOpacity-0.1).toFixed(1));
            }
     };




    return <div>

        <div className="light" style={{backgroundColor:lightSwitch?lightColor:"grey",opacity:lightOpacity}}>   </div>
        <button  className="btn btn-secondary" onClick={ () => {handleLightSwitch(true)}}>On</button> &nbsp;
        <button className="btn btn-secondary" onClick={ () => {handleLightSwitch(false)}}>Off</button> &nbsp;&nbsp;&nbsp;

        <button className="btn btn-danger text-white" onClick={ () => {handleLightColor("red")}}>  Red </button>&nbsp;
        <button className="btn btn-success text-white" onClick={ () => {handleLightColor("green")}}> Green </button>&nbsp;
        <button className="btn btn-primary text-white" onClick={ () => {handleLightColor("blue")}}> Blue </button>  &nbsp;&nbsp;&nbsp;
        
        <button className="btn btn-secondary" onClick={decreaseOpacity}>  - </button>
        <label style= {{marginLeft:'1%',marginRight:'1%'}}>{lightOpacity}</label>
        <button className="btn btn-secondary" onClick={increaseOpacity}> + </button>  &nbsp;&nbsp;&nbsp;
      
      
    </div>
}

export default Light;