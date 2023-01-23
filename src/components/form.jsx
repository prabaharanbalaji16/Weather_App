import React from 'react';
import './form.css';
import {AiOutlineArrowRight} from "react-icons/ai";

function form({handler}) {

  const clicked = (e)=>{
  
  }
  return (
    <div className='form'>
        <form onSubmit={handler} name='form'>
            <input name='city' className='form_input'/>
            <button type="submit" className='form_button'>
              <AiOutlineArrowRight className='form_icon' onClick={clicked} />
            </button>
           
        </form>

    </div>
  )
}

export default form