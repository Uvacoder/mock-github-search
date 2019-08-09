import React from "react"
import { UserDataCard } from './UserDataCard'

export const UserDataList = ({items}) => {



    return (
        <div>
            <UserDataCard {...items} />
        </div>
    )
  };
  

