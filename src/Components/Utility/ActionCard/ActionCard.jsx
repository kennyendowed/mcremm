import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "./ActionCard.css"

function ActionCard( props ) {
  const newVar = (props.value) ? props.value : '❌ Whoops: 👉️ zero record';
    console.log(newVar)
  return (
    <>
                       <div className="col-12 col-sm-6 col-xl-6 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="row d-block d-xl-flex align-items-center">
                                <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                    <div className="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                    <i className={`${props.icon} text-lg opacity-10`} aria-hidden="true"></i>
                                    </div>
                                    <div className="d-sm-none">
                                        <h2 className="h5">{props.title}</h2>
                                        <h3 className="fw-extrabold mb-1">   {newVar || <Skeleton />}</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 px-xl-0">
                                    <div className="d-none d-sm-block">
                                        <h2 className="h6 text-gray-400 mb-0">{props.title}</h2>
                                        <h3 className="fw-extrabold mb-2">   {newVar || <Skeleton />}</h3>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  );
}

export default ActionCard;
