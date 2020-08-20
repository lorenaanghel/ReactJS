import React from 'react';

interface HeaderProps{
    data:string,
    name?: string
}

function Header(props: HeaderProps){
    // props;
    return(
        <div>
            <h1>My header not your header</h1>
            {props.data}
            {props.name}
        </div>
    );
}

export default Header;