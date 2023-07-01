import React from 'react'
import { iconEmail, iconGit, iconLinkedin } from '../icon/IconesMenu'

export default function icones(props: { className: string }) {
    return (
        <div className={`w-32 justify-between ${props.className}`}>
            <a href='https://www.linkedin.com/in/lucas-gomes-filgueiras' target='_blank' rel="noreferrer" className='text-gray-500 hover:text-slate-200'>
                {iconLinkedin}</a>
            <a href='https://github.com/LucasGFT' target='_blank' rel="noreferrer" className='text-gray-500 hover:text-slate-200' >
                {iconGit}
            </a>
            <a href='mailto:lucasgft200303@gmail.com' target='_blank' rel="noreferrer" className='text-gray-500 hover:text-slate-200' >
                {iconEmail}
            </a>
        </div>
    )
}
