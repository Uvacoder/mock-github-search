import React from 'react';
import '../styles/styles.css';

const Pagination = (props) => {
    const pageLinks = []

    const paginationStyle = {
        margin: 'auto',
    };
    // Hard code to 20 otherwise there would be thousands of pages to paginate through
    for(let i = 1; i <= 20; i++){
        pageLinks.push(<li key={i} onClick={()=> props.nextPage(i)}><a href='#'>{i}</a></li>)
    }

    return (
        <div className='pagination'>
            <ul style={paginationStyle}>
                {pageLinks}
            </ul>
        </div>
    )
};

export default Pagination

