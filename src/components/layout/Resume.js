import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import ResumeSkill from '../shared/ResumeSkill';
import ResumeItem from '../shared/ResumeItem';

// Icon
import chartBar from '../../assets/svg/chartbar-icon.svg'
import history from '../../assets/svg/history-icon.svg'
import lapTopCode from '../../assets/svg/laptopcode-icon.svg'
import mapGallery from '../../assets/svg/mapgallery-icon.svg'
import userGraduate from '../../assets/svg/usergraduate-icon.svg'

const Resume = () => {
    const [skill, setSkill] = useState([
        { id: 1, icon: userGraduate, text: 'Education', classNames: 'resume__list-item resume__list-item--active', data: '#education' },
        { id: 2, icon: history, text: 'Work History', classNames: 'resume__list-item', data: '#work-history' },
        { id: 3, icon: lapTopCode, text: 'Programming Skill', classNames: 'resume__list-item', data: '#programming-skill' },
        { id: 4, icon: mapGallery, text: 'Designer Skills', classNames: 'resume__list-item', data: '#designer-skills' },
        { id: 5, icon: chartBar, text: 'SEO Skills', classNames: 'resume__list-item', data: '#seo-skills' }
    ])

    const [resumeContent, setResumeContent] = useState([
        { id: 1, title: 'Envato University', date: '2010-2014', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
        { id: 2, title: 'Envato University', date: '2010-2014', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
        { id: 3, title: 'Envato University', date: '2010-2014', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
    ])

    const [resumeContentProgramming, setResumeContentProgramming] = useState([
        { id: 1, title: 'React', date: '60%', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
        { id: 2, title: 'JavaScript', date: '70%', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
        { id: 3, title: 'Html, CSS', date: '90%', subtitle: 'B.sc in Computer Engineer', description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.' },
    ])

    return (
        <section className='resume'>
            <div className='container skew-reset'>
                <SectionHead title='Resume' caption='My formal Bio Details' />
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <ul className='resume__list h-full'>
                            {skill.map(item => <ResumeSkill key={item.id} icon={item.icon} classNames={item.classNames} text={item.text} data={item.data} />)}
                        </ul>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className='resume__content resume__content--show' id='education'>
                            {resumeContent.map(item => <ResumeItem key={item.id} title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} />)}
                        </div>
                        <div className='resume__content' id='work-history'>
                            {resumeContent.map(item => <ResumeItem key={item.id} title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} />)}
                        </div>
                        <div className='resume__content' id='programming-skill'>
                            {resumeContentProgramming.map(item => <ResumeItem key={item.id} title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} />)}
                        </div>
                        <div className='resume__content' id='designer-skills'>
                            {resumeContent.map(item => <ResumeItem key={item.id} title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} />)}
                        </div>
                        <div className='resume__content' id='seo-skills'>
                            {resumeContent.map(item => <ResumeItem key={item.id} title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;