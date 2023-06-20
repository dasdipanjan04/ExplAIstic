import React from 'react'
import {useLocation} from 'react-router-dom';
import "./Caption.css";
import Card from './Post/Card';
import ChooseCaptionPage from '../assets/characters/ChooseCaptionPage';
import CaptionPage from '../assets/characters/CaptionPage';
const Caption = () => {
    const {state} = useLocation();

  return (

    <>
    <div>
        <div className="header-page3">
            <div>
                <p>ExplAIstic</p>
            </div>
            <div className= "icons-page3">
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <section>
        <div className="content-page3">
            <div className="innerContent-page3">
                <div className='innerContent-div'> 

              
                    <div className='text' >
                        <p className="steps-page3" >Step 3 :Share Your Caption</p>
                        <div className='generated-caption'>
                            <textarea style={{resize:"none"}} value={state.caption} className='caption'></textarea>
                            <button className='btn-refresh'>Refresh <i class="fa-solid fa-arrows-rotate"></i></button>
                        </div>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </div>   
                <button className='btn-style-page3'>Share</button>
                
           </div>
           

        </div>
        <div className="footer-page3">
        </div>
        </section>
        <CaptionPage path={state.file_path}></CaptionPage>

        
        
        
    </div>
   
    </>
  )
       
   
   

}

export default Caption