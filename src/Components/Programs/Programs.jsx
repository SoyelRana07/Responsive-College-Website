import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Programs.css';

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src='https://th.bing.com/th/id/OIP.3w99DBXlKE1uO_fulUVYkgHaE8?rs=1&pid=ImgDetMain' alt='Graduation Ceremony' />
            <div className='caption'>
                <i className='bx bxs-graduation'></i>
                <p>Graduation Ceremony</p>
            </div>
        </div>
        <div className="program">
            <img src='https://th.bing.com/th/id/OIP.l2dYMQM4qApQXmmmUrFZcgHaE8?rs=1&pid=ImgDetMain' alt='Final Year Passout' />
            <div className="caption">
                <i className='bx bxs-group'></i>
                <p>Final Year Passout</p>
            </div>
        </div>
        <div className="program">
            <img src='https://th.bing.com/th/id/OIP.3vrPb9f6iGTsvAW-GE-O2AHaE7?rs=1&pid=ImgDetMain' alt='Grade A Accredited' />
            <div className="caption">
                <i className='bx bxs-award'></i>
                <p>Grade A Accredited</p>
            </div>
        </div>
    </div>
  );
}

export default Programs;
