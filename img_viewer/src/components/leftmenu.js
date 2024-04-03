import React, { useState } from 'react'
import { LeftOutlined,RightOutlined } from '@ant-design/icons';


export default function LeftMenu({LeftMenuData}) {

const [Leftmenu,setLeftmenu] = useState({
    toggle: false
});

const MenuToggle = ()=>{
    setLeftmenu(pre => ({...pre,toggle:!Leftmenu.toggle}))
};

const MenuBtn = (e)=>{
     
};

  return (
   <section style={{ background:"rgba(255,255,255,77%)",borderRadius:"0 0 6px 0",
   boxShadow:"rgb(0, 0, 0) 2px 2px 13px -10px", transition:"all ease 0.4s"}} 
   className={`w-[250px] h-[70vh] fixed top-[140px] ${Leftmenu.toggle === false ? "-left-[252px]" : "left-0"} `}>
    <div  className='relative cursor-pointer'>
        <span onClick={MenuToggle} style={{background:"rgba(255,255,255,77%)",borderRadius:" 0 20px 20px 0px",boxShadow:"rgb(0, 0, 0) 2px 2px 13px -10px"}} className='block absolute right-[-30px] px-2 py-2 text-[14px] font-black top-[33.7vh]'> {Leftmenu.toggle === false ? <RightOutlined/> : <LeftOutlined  />} </span>
        {/* <div style={{background:"rgba(255,255,255,77%)"}} className="py-2 mx-2 rounded-[5px] text-left px-5 text-[13px] flex justify-between items-center cursor-pointer hover:shadow-md -bottom-[69vh] absolute w-[234px] text-red-500"><span>Logout</span> <LogoutOutlined/></div> */}
        </div>
   {/* <div className='w-full flex justify-center items-center pt-10 pb-5'>
   <span style={{backgroundImage:'url("https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-845.jpg")',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className='bg-red-500 w-[80px] h-[80px] block rounded-full'></span>
   </div> */}

   <ul className='flex flex-col gap-y-1 mt-2'>
   {LeftMenuData.map(data =>  {
    return (
        <li key={data.key} onClick={ ()=>MenuBtn(data.key)} style={{background:"rgba(255,255,255,77%)",boxShadow: "3px 0px 26px -3px rgba(0,0,0,0.1)"}} className="py-2 mx-2 rounded-[5px] text-left px-5 text-[13px] flex justify-between items-center cursor-pointer hover:bg-gray-950">  <span>{data.name}</span>{data.icon}</li>
    )
   })}
   </ul>

   </section>
  )
}
