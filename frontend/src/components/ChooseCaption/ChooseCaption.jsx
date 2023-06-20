import React, { useState } from 'react'
import "./ChooseCaption.css"
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import ChooseCaptionPage from '../assets/characters/ChooseCaptionPage';


const ChooseCaption = () => {
    const token = localStorage.getItem('token')
    const [targetId, settargetId] = useState();
    const [selectSizeId,setSelectsizeId] = useState();
    const [platformId, setplatformId] = useState();
    const [tone,setTone]=useState();
    const [caption,setcaption] =useState("");
    const navigate = useNavigate();
    const fillColor = {
        fill:"blue",
    }

    const addBorder = {
        border:"2px solid #1C4042",
        borderRadius:"5px"
    }
    const bordernone = {
        border:"none",
    }


    const selectdiv = {
        background :"#1C4042",
        color : "#fff"
    }
    const styles = {
        background :"#fff",
        color:"#1C4042",
    }

    const handleChange = (id)=>{
        settargetId(id);
    }

    const handleSize = (id)=>{
        setSelectsizeId(id);
    }
    const handleFacebook = (id)=>{
        console.log(id);
        setplatformId(id);
    }

    const handleTwitter= (id)=>{
        console.log(id);
        setplatformId(id);
    }
    const handleInstagram = (id)=>{
        console.log(id);
        setplatformId(id);
    }
    const handleLinkedIn = (id)=>{
        console.log(id);
        setplatformId(id);
    }
    const generateCaption = () =>{
        const context='';
        axios.get(`http://localhost:9000/generate_image_video_caption?caption_size=${selectSizeId}&context=${context}&style=${targetId}&num_hashtags=30&tone=${tone}&social_media=${platformId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        }).then(res=>{
            setcaption(res.data.Caption);
            navigate("/caption",{state:{caption:res.data.Caption}})
        }).catch(err=>{
            console.log(err);
        })


    }
  return (
    <>
    <div>
        <div className="header-page2">
            <div>
                <p>ExplAIstic</p>
            </div>
            <div className= "icons-page2">
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <section>
        <div className="content-page2">
            <div className="innerContent-page2">
                <p className="steps" style ={{marginBottom:"40px"}}>Step 2 :Choose Preference</p>
                <div >
                    <p className="label">Caption Size ?</p>
                </div>
                <div className='captionSize-icons'>
                    <div>
                    <i class="fa-solid fa-align-center captionSize small-i" id = "small" style = {selectSizeId === "small" ? selectdiv:styles} onClick = {(e)=>handleSize(e.target.id)}></i>
                    <p style= {{fontSize:"14px",textAlign:"center"}}>small</p>

                    </div>
                    <div>
                    <i class="fa-solid fa-align-center captionSize medium" id = "medium" style = {selectSizeId === "medium" ? selectdiv:styles} onClick = {(e)=>handleSize(e.target.id)}></i>
                    <p style= {{fontSize:"14px",textAlign:"center"}}>medium</p>

                    </div>
                    <div>
                    <i class="fa-solid fa-align-center captionSize large" id = "large" style = {selectSizeId === "large" ? selectdiv:styles} onClick = {(e)=>handleSize(e.target.id)}></i>
                    <p style= {{fontSize:"14px",textAlign:"center"}}>large</p>


                    </div>
                    <div>
                    <i class="fa-solid fa-align-center captionSize extra-large" id = "extra-large" style = {selectSizeId === "extra-large" ? selectdiv:styles} onClick = {(e)=>handleSize(e.target.id)}></i>
                    <p style= {{fontSize:"14px",textAlign:"center"}}>extra large</p>

                    </div>
                    <div>
                    <i class="fa-solid fa-align-center captionSize blog-post" id = "blog post" style = {selectSizeId === "blog post" ? selectdiv:styles} onClick = {(e)=>handleSize(e.target.id)}></i>
                    <p style= {{fontSize:"14px",textAlign:"center"}}>Blog Post</p>


                    </div>




                </div>
                <div className='preference_heading'>
                <p className="label " style={{marginTop:"20px",}}>Caption Style ?</p>
                </div>
                <div className='captionStyle-icons'>
                    <div className='captionStyle'  id = "cool" onClick={(e)=>handleChange(e.target.id)}  style = {targetId === "cool" ? selectdiv:styles}>
                        Cool
                    </div>
                    <div className='captionStyle'  id ="professional" onClick={(e)=>handleChange(e.target.id)} style = {targetId === "professional" ? selectdiv:styles}>
                        Professional
                    </div>
                    <div className='captionStyle'  id = "artistic" onClick={(e)=>handleChange(e.target.id)} style = {targetId === "artistic" ? selectdiv:styles}>
                        Artistic
                    </div>
                    <div className='captionStyle'  id = "poetic" onClick={(e)=>handleChange(e.target.id)} style = {targetId === "poetic" ? selectdiv:styles}>
                        Poetic
                    </div>
                    <div className='captionStyle'  id = "poetry" onClick={(e)=>handleChange(e.target.id)} style = {targetId === "poetry" ? selectdiv:styles}>
                        Poetry
                    </div>
                </div>
                <div className='preferences'>
                    <div className='captionTone'>
                        <p className="label tone" style={{marginTop:"0px",marginBottom:"0px"}}>Caption Tone ?</p>
                        <div className='dropdown-wrapper'>
                            <select className='dropdown' onChange = {(e)=>setTone(e.target.value)}>
                                <option selected>Casual</option>
                                <option>Humorous</option>
                                <option>Inspirational</option>
                                <option>Conversational</option>
                                <option>Educational</option>
                                <option>Storytelling</option>
                                <option>Sentimental</option>
                            </select>
                        </div>
                    </div>
                    <div className='preffered-platform'>
                        <p className="label" style={{marginTop:"0px",marginBottom:"15px"}}>Preffered PlatForm?</p>
                        <div className='socialHandle-icons'>
                        {/* <img src ={facebook} alt= "facebook" style = {{border:"1px solid #1C4042",padding:"none"}}></img> */}

                        {/* <svg style = {{border:"4px solid #1C4042"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg> */}
                        <div id = "facebook" style = {{width:"50px",height:"50px",display:"flex"}}>
                        {/* <svg width="50" height="50" viewBox="0 0 120 120"  id= "facebook"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M112.65 0.830002H7.35996C3.75354 0.830002 0.829956 3.75358 0.829956 7.36V112.65C0.829956 116.256 3.75354 119.18 7.35996 119.18H112.65C116.256 119.18 119.18 116.256 119.18 112.65V7.36C119.18 3.75358 116.256 0.830002 112.65 0.830002Z" fill="#3D5A98"/>
                        </svg> */}
                        <img  onClick={(e)=>handleFacebook("facebook")} style = {platformId == "facebook" ?addBorder:bordernone}  src={facebook} alt="facebook"></img>
                        </div>
                        <div id = "instagram" style = {{width:"50px",height:"50px",position:"relative",display:"flex"}}>
                        <img  onClick={(e)=>handleInstagram("instagram")} style = {platformId == "instagram" ?addBorder:bordernone}  src={instagram} alt="instagram"></img>

                        </div>
                        <div id = "twitter" style = {{width:"50px",height:"50px",display:"flex"}}>
                        <img  onClick={(e)=>handleTwitter("twitter")} style = {platformId == "twitter" ?addBorder:bordernone}  src={twitter} alt="twitter"></img>
                        </div>
                        <div id = "linkedin" style = {{width:"50px",height:"50px",display:"flex"}}>
                        <img  onClick={(e)=>handleLinkedIn("linkedin")} style = {platformId == "linkedin" ?addBorder:bordernone}  src={linkedin} alt="linkedin"></img>
                        
                        </div>

                    </div>
                    </div>
                </div>
                <button className="btn-style-page2" style = {{border:"none"}} onClick ={generateCaption}>Generate Caption</button>
           </div>
        </div>
        <div className="footer-page2">
        </div>
        </section>
        <ChooseCaptionPage/>
        
    </div>
   
    </>
    
  )
}

export default ChooseCaption