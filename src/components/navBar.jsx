import React from 'react';

// Stateless functional components
const NavBar = (props) => {
    // var t = this.props
    const {totalCounters, total} = props //arguement destructuring
    return ( 
        <div>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <b><a className="navbar-brand" href="#"> {/** href="https://picsum.photos/" */}
                            Navbar <span className="btn btn-sm btn-secondary">{totalCounters}</span>
                        </a></b>
                        <h5><b>Total No of Articles : <span className="btn btn-sm btn-primary">{total} </span></b></h5>
                    </div>
             </nav>
                
            </div>
     );
}
 
export default NavBar;
