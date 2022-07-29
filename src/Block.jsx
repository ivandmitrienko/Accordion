import React, { PureComponent } from 'react';
import './Block.css';
import { IoChevronUpOutline } from 'react-icons/io5';

export default class Block extends PureComponent {

    render() {

        const {block, isActive, activeChevron, handleclick} = this.props;

        return (
            <div className='block'>
                <div className='block__title'>
                    {block.title}
                    <IoChevronUpOutline className={`chevron ${isActive?activeChevron:''}`} 
                    color='F47B56' size={20} 
                    onClick={()=>handleclick(block.id)} />
                </div>
                <div className={`block__text ${isActive?'openBlock':''}`}>
                    {isActive && block.text}
                </div>
            </div>
        )
    }
}


