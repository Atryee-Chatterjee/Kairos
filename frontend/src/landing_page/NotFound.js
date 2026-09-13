import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='conatiner p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>

                <p className='mt-4'>Sorry, we couldn’t find the page you were looking for. Visit <Link to="/" style={{textDecoration: "none"}}>Kairos’s home page</Link></p>
            </div>

        </div>
      );
}

export default NotFound;