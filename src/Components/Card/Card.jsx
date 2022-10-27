import React from 'react'

function Card(props) {
  return (
   
        <div className="col-12 col-sm-6 col-xl-6 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                     <i className={`${props.icon} text-lg opacity-10`} aria-hidden="true" ></i>
                                        <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0">{props.name}</h2>
                                        <h3 className="fw-extrabold mb-2">{props.price}</h3>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  )
}

export default Card