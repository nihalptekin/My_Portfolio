import React from 'react'
import "./projects.css"
import 'boxicons'


const WorksItems = ({ item }) => {
    // const handleClick = () => {
    //     navigate(item.link)
    // }

    return (
        <div className="work_card  " key={item.id} >
            <a href={item.link} target='_blank' rel="noreferrer">
                <img src={item.image} alt="" className='work_img mb-3'/>
            </a>

            <h3 className="work_title ">{item.title}</h3>
            <div className='links' >
                <a href={item.link} className="work_button" target='_blank' rel="noreferrer">
                    Live link
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right work_button-icon" /> */}
                </a>
                <a href={item.link2} className="work_button" target='_blank' rel="noreferrer">
                    GitHub link
                    <i className="bx bx-right-arrow-alt work_button-icon"></i>
                </a>
 
            </div>
    
        </div>
    )
}

export default WorksItems