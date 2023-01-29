import React, {useRef} from 'react';

const ResumeSkill = ({icon, classNames, text, data}) => {

    const liRef = useRef(null)

    const classHandler = () => {
        document.querySelector('.resume__list-item--active').classList.remove('resume__list-item--active')
        document.querySelector('.resume__content--show').classList.remove('resume__content--show')

        liRef.current.classList.add('resume__list-item--active')
        let contentId = liRef.current.getAttribute('data-content-id')
        
        document.querySelector(contentId).classList.add('resume__content--show')
    }

    return (
        <li className={classNames} onClick={classHandler} ref={liRef} data-content-id={data}>
            <img className='resume__list-icon' src={icon} alt='icon' />
            <span className='resume__list-text'>{text}</span>
        </li>
    );
};

export default ResumeSkill;