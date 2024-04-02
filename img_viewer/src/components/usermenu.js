import React from 'react'
import { LogoutOutlined } from '@ant-design/icons';


export default function UserMenu({MenuDatas,setChangePage,setIframePage,setaddSearchBtnRemove,menuState,setMenuState}) {


const MenuBtn = (e)=>{
     setChangePage(pre => (e));
     setIframePage(false);
     setaddSearchBtnRemove(false);
     if( e > 1){
        setaddSearchBtnRemove(true);
     };
     setMenuState(pre => ({...pre,toggle:!menuState.toggle}))
};

  return (
   
   <section style={{ background:"rgba(255,255,255,77%)",borderRadius:"6px",
   boxShadow:"rgb(0, 0, 0) 2px 2px 13px -10px", transition:"all ease 0.4s"}} 
   className={` w-[250px] z-50 fixed top-[9%] py-2 ${menuState.toggle === false ? "-right-[252px]" : "usermenu right-1/2 translate-x-1/2 xs:right-5 xs:translate-x-0"} `}>
    {/* <div  className='relative cursor-pointer'>
        <span onClick={MenuToggle} style={{background:"rgba(255,255,255,77%)",borderRadius:" 0 5px 5px 0px",boxShadow:"rgb(0, 0, 0) 2px 2px 13px -10px"}} className='block absolute right-[-46px] px-4 py-2 text-[14px] font-black'> {menuState.toggle === false ? <RightOutlined/> : <LeftOutlined  />} </span>
        <div style={{background:"rgba(255,255,255,77%)"}} className="py-2 mx-2 rounded-[5px] text-left px-5 text-[13px] flex justify-between items-center cursor-pointer hover:shadow-md -bottom-[69vh] absolute w-[234px] text-red-500"><span>Logout</span> <LogoutOutlined/></div>
        </div>
   <div className='w-full flex justify-center items-center pt-10 pb-5'>
   <span style={{backgroundImage:'url("https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-845.jpg")',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className='bg-red-500 w-[80px] h-[80px] block rounded-full'></span>
   </div> */}

   <ul className='flex flex-col gap-y-1'>
   {MenuDatas.map(data =>  {
    return (
        <li key={data.key} onClick={ ()=>MenuBtn(data.key)} style={{background:"rgba(255,255,255,77%)",boxShadow: "3px 0px 26px -3px rgba(0,0,0,0.1)"}} className="py-2 mx-2 rounded-[5px] text-left px-5 text-[13px] flex justify-between items-center cursor-pointer hover:bg-gray-950">  <span>{data.name}</span>{data.icon}</li>
    )
   })}
   <li style={{background:"rgba(255,255,255,77%)",boxShadow: "3px 0px 26px -3px rgba(0,0,0,0.1)"}} className="py-2 mx-2 rounded-[5px] text-left px-5 text-[13px] flex justify-between items-center cursor-pointer hover:shadow-md -bottom-[69vh]  w-[234px] text-red-500"><span>Logout</span> <LogoutOutlined/></li>
   </ul>

   </section>
  )
}
