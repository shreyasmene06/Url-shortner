import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <div className='container mx-auto p-2'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>URL Shortener</div>
            </div>
        </div>
    );
};

export default Header;

