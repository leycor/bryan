import React from 'react'

const Footer = ({title, phone, email, linkedin, github}) => {

    return(
        <footer className='text-sm text-gray-700 text-center mx-14 border-t border-gray-200 py-7'>
            <a href={ linkedin }><i className="fab fa-linkedin text-2xl p-2 hover:text-green-700"></i></a>
            <a href={ github }><i className="fab fa-github-square text-2xl p-2 hover:text-green-700"></i></a>

            <div className='mt-1 flex flex-wrap item-start justify-center'>
                <p className='mr-2'>{title}</p>
                <p className='mr-2'><i className="fas fa-at"></i>{ email }</p>
                <p className=''><i className="fas fa-phone-alt"></i> { phone }</p>
            </div>
        </footer>
    );
}

export default Footer