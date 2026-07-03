import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'

const Navbar = ({active}) => {
  return (
    <div className={`800px:${styles.normalFlex} block `}>
        {
            navItems && navItems.map((i, index)=>(
                <div className="flex" key={index}>
                    <Link to={i.url} className={`${active === index +1 ? "text-[#C59B6D]" : " text-[#1F2933] 800px:text-[#fff]"} font-[500] px-6 cursor-pointer pb-2 800px:pb-0`}>
                    {i.title}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Navbar
