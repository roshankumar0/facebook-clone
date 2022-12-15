import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import UserInfor from '../components/UserInfo'
import LiveContent from '../components/LiveContent'
import { UserGroup, Clock, Home, Bookmark, UserCircle, Star, ChevronDown, VideoCamera, Play, Plus } from "heroicons-react";



export default function MainBody() {
    return (
        <div className='grid grid-flow-col auto-cols-[minmax(0,_3fr)]  mt-7'>
            <div className=' t-10'>
                <Sidebar Icon={UserCircle} Icons="Roshan Kumar" />
                <Sidebar Icon={UserGroup} Icons="Finds Friends" />
                <Sidebar Icon={Clock} Icons="Most Recent" />
                <Sidebar Icon={UserGroup} Icons="Groups" />
                <Sidebar Icon={Bookmark} Icons="MarketPlace" />
                <Sidebar Icon={Home} Icons="Watch" />
                <Sidebar Icon={Home} Icons="Memories" />
                <Sidebar Icon={Home} Icons="Saved" />
                <Sidebar Icon={Home} Icons="Events" />
                <Sidebar Icon={Star} Icons="Favorites" />
                <Sidebar Icon={ChevronDown} Icons="See more" />

            </div>
            <div className='flex flex-col items-center bg-white rounded-2xl'>
                <div className='flex'>
                    <LiveContent Icon={Bookmark} Icons="Stories" />
                    <LiveContent Icon={Play} Icons="Reels" />
                    <LiveContent Icon={VideoCamera} Icons="Rooms" />
                </div>
                <div className='border p-4 '>
                    <UserInfor Icon={UserCircle} UserIcon  />
                    <UserInfor Icon={Plus} Add/>
                    <UserInfor Icon={'Plus'} Plus="create story" />
                </div>
            </div>
            <div>
                login page
                <Login />
            </div>

        </div>
    )
}
