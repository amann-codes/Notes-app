import React from 'react'
import GroupLogo from './GroupLogo.jsx'
import GroupName from './GroupName.jsx'

export default function GroupTitle() {
  return (
    <div className='flex flex-row justify-start items-center p-3 gap-x-6'>
        <GroupLogo/>
        <GroupName/>
    </div>
  )
}
