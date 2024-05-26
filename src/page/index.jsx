import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='iphone-x'>
        <div className='left-side'>
          <div className='time'>
            <div className='colon' />
          </div>
        </div>
        <div className='image' />
        <div className='right-side'>
          <div className='wifi' />
          <div className='battery' />
          <div className='mobile-signal' />
        </div>
      </div>
      <div className='flex-row-e'>
        <div className='header'>
          <div className='icon-chevron-left'>
            <div className='chevron-left-thin' />
          </div>
        </div>
        <div className='pasted-graphic' />
      </div>
      <span className='select-nearest-stop'>인접한 정류장을 선택해주세요!</span>
      <div className='image-1'>
        <span className='forty-nine-percent'>49%</span>
      </div>
      <div className='twenty-one-percent'>
        <span className='image-2'>21%</span>
      </div>
      <div className='pic-3'>
        <span className='seventy-six-percent'>76%</span>
      </div>
      <div className='image-3' />
      <div className='flex-row-fb'>
        <div className='img' />
        <div className='regroup'>
          <div className='img-4' />
          <div className='image-5'>
            <span className='sixty-five-percent'>65%</span>
          </div>
        </div>
      </div>
      <span className='distance-closeness'>
        정류장과 거리가 가까워져야 적립을 할 수 있어요!
        <br />
        지도상에 표시되는 수치는 수용량을 의미합니다.
      </span>
      <div className='home-indicator' />
      <div className='screenshot' />
    </div>
  );
}
