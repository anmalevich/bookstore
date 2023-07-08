import { FC } from 'react';
import { ActionsCard } from '../ActionsCard/ActionsCard';
import { Tabs } from '../Tabs/Tabs';
import './MoreDetailse.scss';

interface IMoreDetailse {
}

export const MoreDetailse: FC<IMoreDetailse> = () => {
    return (
        <div className='moreDetalise'>
            <Tabs/>
            <div className='moreDetalise__info'>
                <p>Start programming your own robots using Robot Operation System (ROS). Targeted for absolute beginners in ROS, Linux, and Python, this guide lets you <br /> build your own robotics projects.</p>
                <p>You'll learn the basic foundation of Ubuntu Linux. Begin with the fundamentals. Installation and useful commands will give you the basic tools you need while <br /> programming a robot. Then add useful software applications that can be used while making robots. Programming robots can be done using any of the <br /> programming languages. Most popular programming languages are Python and C++. You will incorporate the fundamentals of C++ by learning object <br /> oriented programing concepts from example and building C++ projects.</p>
                <p>Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap <br /> mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands- <br/> on experience working with hardware to create a real robot.</p>
            </div>
            <ActionsCard/>
        </div>
    )
};
