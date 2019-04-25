import React from 'react'
import {NavLink} from "react-router-dom";
import Admin from '../features/admin/index'
import data from '../data/products.json'


export default function AdminPage() {
    return <div>
        <h2>Welcome, Admin!</h2>
<Admin/>


    </div>
}