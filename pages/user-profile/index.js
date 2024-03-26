import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import UserProfile from '@/Components/Profile/UserProfile'
import React from 'react'

export default function index() {
    return (
        <div>
            <NavBar />
            <UserProfile />
            <Footer />
        </div>
    )
}
