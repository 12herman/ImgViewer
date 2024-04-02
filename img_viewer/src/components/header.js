import React from 'react'
import Logo from '../assets/imgs/qosteqlogo.webp';
import { ProductOutlined } from '@ant-design/icons';



const Header = ({iframePage,iframeTitle,setChangePage,setIframePage,setMenuState,menuState})=>{

  const HomePage =()=>{
    setChangePage(pre => (1));
    setIframePage(false);
  };

  const UserMenu =()=>{
    setMenuState(pre => ({...pre,toggle:!menuState.toggle}));
  };

  return (
    <ul className={`grid grid-cols-3 h-[7vh] items-center px-8 z-50 w-full ${iframePage === false ? "fixed top-0" :"block"} `} style={{background:"rgba(255,255,255,95%)",boxShadow: "3px 0px 26px -3px rgba(0,0,0,0.1)"}}>
        
        <li className='flex justify-start items-center'>
        <img className='w-[90px] mr-5' src={Logo} alt="Qosteq Logo"/>
        <button onClick={HomePage}  class={` hidden lg:block border flex justify-center items-center rounded-full py-[1vh] px-5 gap-x-2  text-white bg-orange-400  focus:outline-none  focus:ring-0 hover:text-gray-100 text-[13px]  `}><ProductOutlined /> <span>Project</span></button>
        </li>
        
        <li className='self-center justify-self-center'> 
        {
          iframePage=== true ? <span className='hidden sm:block'>{iframeTitle}</span> : "" }
</li>

    <li onClick={UserMenu} className='usermenu justify-self-end cursor-pointer'> <span className='usermenu block w-[5vh] h-[5vh] rounded-full' style={{backgroundImage:'url("https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww")',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} ></span> </li> 
 
    </ul>
  )
}
export default Header;