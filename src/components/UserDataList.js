import React from 'react';
import '../styles/styles.css';

export const UserDataList = ({items}) => {

    const imgStyle = {
        margin: '20px',
        width: '50px',
        height: '60px'
      };

    return (
        <table>
            <tr>
                <th>GitHub Profile Pic</th>
                <th>GitHub Page</th>
                <th>More Details (such as bio, follower count and more!)</th>
            </tr>

            {items.map(function(the_object, index) {
                return (
                    <tr>              
                        <td key={ index } ><img src={the_object.avatar_url} alt="User" style={imgStyle}/></td>
                        <td><a href={the_object.html_url} target='_blank'>{the_object.html_url}</a></td>
                        <td><a href={the_object.url} target='_blank'>Learn more about me!!</a></td>
                    </tr>
                
                )
            })}
        </table>
    )
  };
