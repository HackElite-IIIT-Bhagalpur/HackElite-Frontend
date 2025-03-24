//// RENDER ALL MENU ITEMS FROM HERE 

/////////////////////EXAMPLE WITH ICONS////////////////////////////// 

// import About from "../pages/About"
// import Contact from "../pages/Contact"
// import Hero from "../pages/Hero"
// import { FaHome } from "react-icons/fa"
// import { FaInfo } from "react-icons/fa"
// import { FaPhone } from "react-icons/fa"

// const menuItems = [
//     {
//         title: 'Home',
//         path: '/',
//         icon: FaHome,
//         component: Hero
//     },
//     {
//         title: 'About',
//         path: '/about',
//         icon: FaInfo,
//         component: About,
//         isDropdown: true,
//         dropdownItems: [
//             {
//                 title: 'Our Team',
//                 path: '/about/team',
//                 component: OurTeam,
//                 isDrr
//             },

//         ]
//     },
//     {
//         title: 'Contact',
//         path: '/contact',
//         icon: FaPhone,
//         component: Contact
//     },
    
// ]

////////////////////EXAMPLE WITHOUT ICONS//////////////////

// const menuItems = [
//     {
//         title: 'Home',
//         path: '/',
//         component: Hero
//     },
//     {
//         title: 'About',
//         path: '/about',
//         component: About
//     },
//     {
//         title: 'Contact',
//         path: '/contact',
//         component: Contact
//     }
// ]




///////////////////MENU ITEM COMPONENT///////////////////////////



// import React, { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// const SidebarItem = ({ item }) => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     const [isOpen, setIsOpen] = useState(0)
//     const [isCurrentMenu, setIsCurrentMenu] = useState(location.pathname === `/dashboard/${item.url}`)
//     useEffect(() => {
//         setIsCurrentMenu(location.pathname === `/dashboard/${item.url}`)
//     }, [navigate])
//     return (
//         <>
//             <div onClick={item.isDropdown ? () => setIsOpen(!isOpen) : () => navigate(item.url)} className={` cursor-pointer px-2 w-full h-12 ${isCurrentMenu ? 'bg-gray-600' : 'bg-gray-900'} focus:outline-none transition-all duration-300 hover:bg-gray-700 relative flex items-center`}>
//                 {item.icon !== "/logo.webp" && <item.icon className='mr-3' />}
//                 <p className=''>{item.name}</p>
//                 {item.isDropdown ? <p className={`absolute transition-transform duration-300 ${isOpen ? "rotate-90" : ""} right-1`}>
//                     &#9656;
//                 </p> : null}
//             </div>
//             {item.isDropdown ? <div className={`  ${isOpen ? `` : "hidden"}`}>
//                 {item.dropDownOptions.map((subitem, index) => {
//                     return <SidebarItem item={subitem} />
//                 })}
//             </div> : null}
//         </>
//     )
// }

// export default SidebarItem