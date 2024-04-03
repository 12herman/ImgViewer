import React, { useState } from 'react'
import {PlusOutlined} from "@ant-design/icons";
import { FloatButton,Modal, Form, Input, InputNumber } from 'antd';
import LeftMenu from '../components/leftmenu';
import CoverImg1 from '../assets/imgs/project_cover_img/project1.png';
import CoverImg2 from '../assets/imgs/project_cover_img/project2img.png';
import CoverImg3 from '../assets/imgs/project_cover_img/project3img.png';
import CoverImg4 from '../assets/imgs/project_cover_img/project4img.png';
import CoverImg5 from '../assets/imgs/project_cover_img/project5img.png';


export default function ProjectCard({iframePage,setIframePage,setIframeTitle}) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const CardData = [
        {
          key: 1,
          coverimg:CoverImg1,
          projectname: "Conexra Ettayapuram Road",
          author: "Robert Czariewski",
          organization: "Simlab sports",
          creationdate: "01/04/2022",
          lastmodified: "01/04/2024",
          iframe:"https://my.matterport.com/show/?m=Cns8qx3cG9v&play=1"
        },
        {
            key: 2,
            coverimg:CoverImg2,
            projectname: "Work Room",
            author: "Robert Czariewski",
            organization: "Simlab sports",
            creationdate: "01/04/2022",
            lastmodified: "01/04/2024",
            iframe:"https://my.matterport.com/show/?m=ABM4KEGEnEg&play=1"
          },
          {
            key: 3,
            coverimg: CoverImg3,
            projectname: "Main Hall",
            author: "Robert Czariewski",
            organization: "Simlab sports",
            creationdate: "01/04/2022",
            lastmodified: "01/04/2024",
            iframe:"https://my.matterport.com/show/?m=Cns8qx3cG9v&play=1"
          },
          {
            key: 4,
            coverimg:CoverImg4,
            projectname: "Conference Hall",
            author: "Robert Czariewski",
            organization: "Simlab sports",
            creationdate: "01/04/2022",
            lastmodified: "01/04/2024",
            iframe:"https://my.matterport.com/show/?m=6uTfzPshjiC&play=1"
          },
          {
            key: 5,
            coverimg:CoverImg5,
            projectname: "Entrance",
            author: "Robert Czariewski",
            organization: "Simlab sports",
            creationdate: "01/04/2022",
            lastmodified: "01/04/2024",
            iframe:"https://my.matterport.com/show/?m=t7HN3amEt4f&play=1"
          },
          {
            key: 6,
            coverimg:
              "https://t3.ftcdn.net/jpg/00/83/92/82/240_F_83928200_mYGZqB0ozTtSS6J5EtW9834mjb5tLW6x.jpg",
            projectname: "project heading",
            author: "Robert Czariewski",
            organization: "Simlab sports",
            creationdate: "01/04/2022",
            lastmodified: "01/04/2024",
            iframe:"https://my.matterport.com/show/?m=Cns8qx3cG9v&play=1"
          },
      ];

      const [iframeData,setIframeData] = useState(null);

      const iframeLink = (iframe,title)=>{
        setIframePage(true);
        setIframeData(iframe);
        setIframeTitle(title);
      };
      
      const LeftMenuData = [
        {
          key:1,
          name:"Home", 
        },
        {
          key:2,
          name:"About", 
        },
      ]
  return (
<>
{/*  */}
    { iframePage === false || iframePage === undefined ? 
    <section className='w-11/12 mx-auto '>
    
    {/* <h3 className='flex justify-start items-center gap-x-3'><HomeOutlined/> <span>Home</span></h3> */}
    
    <form className={`fixed top-[9vh] left-1/2 -translate-x-1/2 bg-white rounded-[6px] w-[80%] lg:w-[40%]`}>   
    <label for="simple-search" class="sr-only">Search</label>
    <div class={`  flex justify-center items-center rounded-[6px] py-[0.8vh] px-5 gap-x-2   border  text-[13px]  ${iframePage === false ? "block": "hidden" }`}>
        <input style={{background: "trns", outline:"none", backgroundColor:"transparent"}} type="text" id="simple-search" class="placeholder-gray-500  text-sm   block w-full  text-black  focus:border-none" placeholder="Search..." required />
        <button type="submit"  >
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
    </div>
</form>

{/* <hr className='mt-40'></hr> */}

    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-y-4 gap-x-4 pt-[6.4vh]">
    {CardData.map((data) => {
      return (
        <ul 
        key={data.key}
        onClick={()=>iframeLink(data.iframe,data.projectname)}
          className="card  cursor-pointer"
          style={{
            background: "rgba(255,255,255,77%)",
            borderRadius: "6px",
            boxShadow: "rgb(0, 0, 0) 2px 2px 13px -10px",
          }}
        >
          <li
            style={{
              background:
                `url(${data.coverimg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "6px 6px 0 0",
            }}
            className="w-full h-[200px]"
          ></li>
          <li className="py-5">
            <h3 className="text-xl font-semibold ">{data.projectname}</h3>
            <section className="grid  xl:grid-cols-2 pt-2">
              <div>
                <h4 className="font-semibold text-[10px]">
                  Author:{" "}
                  <sapn className="font-[300]">{data.author}</sapn>
                </h4>
                <h4 className="font-semibold text-[10px]">
                  Organization:{" "}
                  <sapn className="font-[300]">{data.organization}</sapn>
                </h4>
              </div>
              <div>
                <h4 className="font-semibold text-[10px]">
                  Creation date:{" "}
                  <sapn className="font-[300]">{data.creationdate}</sapn>
                </h4>
                <h4 className="font-semibold text-[10px]">
                  Last modified:
                  <sapn className="font-[300]">{data.lastmodified}</sapn>
                </h4>
              </div>
            </section>
          </li>
        </ul>
      );
    })}
    </div>
    <FloatButton onClick={showModal} icon={<PlusOutlined/>} tooltip={<div className='text-[11px]'>Add Project</div>} />
    <Modal  title="Add New Project" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="project name"
          label="Project Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        
      </Form>
      </Modal>
    </section>
    : 
   <div>
   <LeftMenu LeftMenuData={LeftMenuData} />
   <iframe title='iframe' className='w-full h-[93vh]' src={iframeData}
frameborder='0' allowfullscreen allow='xr-spatial-tracking'>  
</iframe>
   </div>
}
    
    </> 
 
  )
}
