import React from 'react'
import UserProfileSetting from "../UserProfileSetting/UserProfileSetting"
import NavItems from './userProfileMenu/NavItems'


export default function UserProfileMenuExample() {
    return (
        <div>
            <NavItems />
            <UserProfileSetting />
        </div>
    )
}
