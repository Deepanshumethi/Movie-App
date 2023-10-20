import React from 'react'

function Liveshowcard(props) {
  // console.log(props.value)
  return (
    <section className='liveshowcard'>
      <div className='liveshowimg'>
      <img src={props.value.image} alt={props.value.title}></img>
      <div className='liveshowothr'>
        <div className='livebox'>Live</div>
        
        <div className='viewerbox'>{props.value.viewers} Viewers</div>
      </div>
      <div className='liveplay'><i className="fa-solid fa-play"></i></div>
      </div>
      

      <div className='liveshowdetail'>
        <div className='livechannelname'><img src={props.value.channel} alt={props.value.title}></img></div>
        <div className='livename'>{props.value.title}</div>
      </div>
    </section>
  )
}

export default Liveshowcard