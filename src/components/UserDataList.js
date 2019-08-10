import React from "react"
import { UserDataCard } from './UserDataCard'

export const UserDataList = ({items=[]}) => {
    console.log("here", items)
    return (
    //    <div></div>

        <ul>
            {items.map(function(the_object, index) {
                return (
                
                <li key={ index }>{the_object.login}</li>
                
                )
            })}
        </ul>
    )
  };

