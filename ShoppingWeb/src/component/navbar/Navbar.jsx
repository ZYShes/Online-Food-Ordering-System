import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";


function Navbar() {

    const [active, setAvtive] = useState(false);

    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();

    const isActive = ()=>{
        window.scrollY > 0 ? setAvtive(true) : setAvtive(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', isActive);

        return  ()=>{
            window.removeEventListener('scroll', isActive);
        }

    },[])

    const currentUser = {
        id:1,
        username:"Shes",
        isSeller:true,
    } 

    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div  className="navbar__container">
                <div className="navbar__logo">
                    <Link to = "/" className="link">   
                    <span className="navbar__text">EasyMart</span>
                    </Link>
                    <span  className="navbar__dot">.</span>
                </div>
                <div className="navbar__links">
                    <span>Categories</span>
                    <span>New In</span>
                    <span>Clothing</span>
                    <span>Home & Kitchen</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Sign in</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <span>{currentUser?.username}</span>
                            {open && <div className="user__option">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                        <Link className="link" to="/myProduct">Products</Link>
                                        <Link  className="link" to="/add">Add New Product</Link>
                                        </>
                                    )
                                }
                                <Link  className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" to="/">Logout</Link> 
                            </div>}
                        </div>
                    )}
                </div>
            </div>

            {(active || pathname !== "/") && (
                <>
                <hr />
                <div className="navbar__menu">
                    <span>aaa</span>
                </div>
                </>
            )}           
        </ div>
    )
}

export default Navbar;