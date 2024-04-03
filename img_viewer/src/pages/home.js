import React, { useEffect, useState } from "react";
import UserMenu from "../components/usermenu";
import Header from "../components/header";
import ProjectCard from "./projectcard";
import Profile from "./profile";
import Settings from "./settings";
import {UserOutlined,SettingOutlined,HomeOutlined} from "@ant-design/icons";


const Home = () => {

    const [changePage,setChangePage] =useState(null);
    const [iframePage,setIframePage] = useState(false);
    const [iframeTitle,setIframeTitle] = useState('');
    const [addSearchBtnRemove,setaddSearchBtnRemove] = useState(false);
    const [menuState,setMenuState] = useState({
      toggle: false
  });
    const MenuDatas = [
        {
            key:1,
            name:"Home",
            icon:<HomeOutlined />,
            component:<ProjectCard iframePage={iframePage} setIframePage={setIframePage} setIframeTitle={setIframeTitle} />
        },
        {
            key:2,
            name:"Profile",
            icon:<UserOutlined />,
            component:<Profile/>
        },
        {
            key:3,
            name:"Settings",
            icon:<SettingOutlined />,
            component:<Settings/>
        },

    ];

    useEffect(() => {
      const handleBodyClick = (event) => {
        if (menuState.toggle) {
          const userMenu = document.querySelector('.usermenu');
          if (userMenu && !userMenu.contains(event.target)) {
            setMenuState(pre => ({...pre, toggle:false}))
          }
        }
      };
      window.addEventListener('click', handleBodyClick);
      return () => {
        window.removeEventListener('click', handleBodyClick);
      };
    }, [menuState]);
    
   
  return (
    <main >
      <Header iframePage={iframePage} iframeTitle={iframeTitle} addSearchBtnRemove={addSearchBtnRemove} setChangePage={setChangePage} setaddSearchBtnRemove={setaddSearchBtnRemove} setIframePage={setIframePage} menuState={menuState} setMenuState={setMenuState}/>
      <UserMenu MenuDatas={MenuDatas} setChangePage={setChangePage} setIframePage={setIframePage} setaddSearchBtnRemove={setaddSearchBtnRemove} menuState={menuState} setMenuState={setMenuState}/>
      <section className={`${iframePage === true ? "w-full" : "w-10/12 mx-auto mt-20"}`}>
      {changePage === null ? <ProjectCard iframePage={iframePage} setIframePage={setIframePage} setIframeTitle={setIframeTitle}/> :MenuDatas[changePage-1].component }
      </section>
    </main>
  );
};

export default Home;
