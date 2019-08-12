import React from 'react';
import '../styles/styles.css';

export const UserDataList = ({items}) => {

    const imgStyle = {
        margin: 'auto',
        width: '50%',
        display: 'block',
    };

    return (
        <div className='table-container'>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>GitHub Profile Pic</th>
                        <th>GitHub Page</th>
                        <th>Link to more details</th>
                    </tr>
                </thead>

                {items.map(function(the_object, index) {
                    return (
                        <tr>              
                            <td key={ index } ><img src={the_object.avatar_url} alt="User" style={imgStyle}/></td>
                            <td><a href={the_object.html_url} target='_blank' rel='noopener noreferrer'>{the_object.html_url}</a></td>
                            <td><a href={the_object.url} target='_blank' rel='noopener noreferrer'>Learn more about me!!</a></td>
                        </tr> 
                    )
                })}
            </table>
        </div>
    )
  };
