import React, { Component } from 'react'
import './home.css'
export default class HomeWrap extends Component {
  render() {
    let outstand = {
    color: '#fff',
    backgroundColor: '#797777',
    textAlign: 'center',
    padding: '20px',
    fontSize: '33px',
    fontWeight: '600',
    }
    return (
      <div>
        <div style={outstand}>Công trình tiêu biểu</div>
        <div className='homeWrap'>
          <div className='homeWrap1'>
            <div className='wrapTop1'>
              <img src='../img_home/home1.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapbottom1'>
              <img src='../img_home/home2.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
          </div>
          <div className='homeWrap2'>
            <div className='wrapTop2'>
              <img src='../img_home/home3.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapMid2'>
              <img src='../img_home/home4.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapbottom2'>
              <img src='../img_home/home5.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
          </div>
          <div className='homeWrap3'>
            <div className='wrapTop3'>
              <img src='../img_home/home6.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
            <div className='wrapbottom3'>
              <img src='../img_home/home7.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
          </div>
        </div>
        <div style={outstand}>Năng lực VIỆT QUỐC GROUP</div>
        <div className='vid_nl'>
          <div className='wrap_yout'>
            <div className='yout1'></div>
            <div className='yout2'></div>
            <div className='yout3'></div>
          </div>
        </div>
      </div>
       
    )
  }
}

