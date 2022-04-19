// export const Button=({children})=>{
// return <button>{children}</button>
// }
import styled from 'styled-components'
const Button=styled.button`
width:150px;
height:40px;
margin: 5px;
margin-top:${(props)=>((props.bg1==="text")||(props.bg1==="link"))?"10px":"200px"};
border:none;
font-size:17px;
font-family:sans-serif;
color:${(props)=>props.bg=="primary"?"white":"black"};
color:${(props)=>((props.bg1==="link"))?"rgb(69,126,255)":""};
box-shadow:${(props)=>((props.bg1==="text")||(props.bg1==="link"))?"none":"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"};
background-color:${(props)=>props.bg=="primary"?"rgb(69,126,255)":"white"};
`
export {Button}