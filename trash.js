// if (notIncludesC) {
//   console.log('✅ the value c  👉️ is NOT included in the array');
// } else {
//   console.log('⛔️ the value c is included in the array');
// } 
 
    {/* <div className="col-lg-4 col-md-6">
        <div className="card h-100">
          <div className="card-body p-3">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                <div className="d-flex flex-column">

                  <span className="mb-1 text-xs">CUSTOMER ACCOUNT NUMBER: <span className="text-dark font-weight-bold ms-sm-2">{accountNumber}</span></span>
                  <span className="mb-1 text-xs">REASONS: <span className="text-dark ms-sm-2 font-weight-bold">{reason}</span></span>
                  <span className="mb-1 text-xs">OLD RM CODE: <span className="text-dark ms-sm-2 font-weight-bold">{oldRMcODE}</span></span>
                  <span className="mb-1 text-xs">NEW RM CODE: <span className="text-dark ms-sm-2 font-weight-bold">{newRMcode}</span></span>
                  <span className="mb-1 text-xs">COMMENTS: <span className="text-dark ms-sm-2 font-weight-bold">{ADcomments}</span></span>
                </div>
                <div className="ms-auto text-end">
                  {/* <a className="btn btn-link text-danger text-gradient px-3 mb-0" ><i className="far fa-trash-alt me-2"></i>Delete</a>
                        <a className="btn btn-link text-dark px-3 mb-0" ><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a> */}
                //         </div>
                //         </li>
          
                //       </ul>
          
          
          
          
                //     </div>
                //   </div>
                // </div>
                // <div className="col-lg-8 col-md-6">
                //   <div className="card h-100">
                //     <div className="card-body p-3">
                //       <form onSubmit={onSubmit}>
                //         <input type="hidden" name='id'
                //           value={setsid}
                //           onChange={(e) => setID(e.target.value)}
          
                        />
                        {/* <input type="text" name='id'
                            value={cname}
                            onChange={(e) => setCName(e.target.value)}
                            
                            /> */}
                        // <label>SELECT ACTION</label>
                        // <div className="mb-3">
                        //   <select
                        //     name="reason"
                        //     onChange={(e) => chnageSelect(e.target.value)}
                        //     className="form-control" required
                        //   >
                        //     <option value=' '>-----o	Select an option-----</option>
                        //     <option value="Approve"> o	Approve request</option>
                        //     <option value="Decline"> o	Decline request</option>
          
                        //   </select>
                        // </div>
                        // {/* {errors.reason && <p style={{color:'red'}}> {errors.reason.message}</p> } */}
                        // <div className={shouldHide ? 'hidden' : ""}>
                        //   <label>Additional Comment*</label>
                        //   <div className="mb-3">
                        //     <textarea
                        //       type="text"
                        //       name="ADcomments"
                        //       className="form-control"
                        //       placeholder="Additional Comment*"
                        //       value={Comments}
                        //       onChange={(e) => setADcomments(e.target.value)}
                        //     />
                        //   </div>
                          {/* <p>{errors.ADcomments?.message}</p> */}
          //               </div>
          //               {!isDoneSubmitted ? (
          
          //               <div className="text-center">
          //                 {!isSubmitting ? (
          //                   <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0" disabled={!isCheck } >Submit</button>
          //                 ) : (
          //                   <button
          //                     className="btn bg-gradient-info w-100 mt-4 mb-0"
          //                     disabled
          //                   >
          //                     <LoadingSpinner />   PROCESSING...
          //                   </button>
          //                 )
          //                 }
          //               </div>
          //  ) :(
          //   <button
          //   className="btn bg-gradient-info w-100 mt-4 mb-0"
          //   disabled
          // >
          // Done PROCESSING...  
          // </button>
          //  )
                        
                        
          // }
          //             </form>
          //           </div>
          //         </div>
          //       </div>
           */}
 //   const getData = async (record) => {
    //     // console.log(record);
    //     var arData = {
    //       rmCode: record
    //     }
    //     await dashboardService.fetchRMSCustomerUsersList(arData).then(
    //       (response) => {
    //         // console.log(response.data)
    //         setRMsCustomerdata(response.data);
    //       },
    //       (ex) => {
    
    //         if (ex.code === "ERR_NETWORK") {
    //           let Msg = () => (
    //             <div>
    //               <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //               <p> {ex.message} </p>
    //             </div>
    //           )
    //           toast.error(Msg, {
    //             position: "top-right",
    //             autoClose: 10000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //           });
    //         }
    //         if (ex.response.data?.error.code === 404) {
    //           let Msg = () => (
    //             <div>
    //               <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //               <p> {ex.message}  </p>
    //               <p>❌ {ex.response.data.error.message} ❌</p>
    //             </div>
    //           )
    //           toast.error(Msg, {
    //             position: "top-right",
    //             autoClose: 10000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //           });
    //         } else {
    //           if (typeof ex.response.data?.error.data != 'string') {
    //             for (let err in ex.response.data?.error.data) {
    //               // console.log(err);
    //               // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
    //             }
    //           }
    //         }
    
    //       })
    //     // res.data.map(row =>({id:row.id,name:row.name,emailss:row.email,address:row.address.city}))
    
    //   }
 
 // useEffect(() => {
  //   setLoading(true);
  //   const timing = setTimeout(() => {
  //     setBlog(dummyData);
  //     setLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timing);
  // }, []);
//   useEffect(() => {
//     const getData = () => {
//         // showLoader();

//         dashboardService.fetchExistedUsers()
//             .then(response => response.json())
//             .then(json => {
//                 // hideLoader();
//                 setFetchExisted(json);
//             });
//     };

//     getData();
// }, []);

// useEffect(() => {
//   const fetchData = async () => {
//     const res = await dashboardService.fetchExistedUsers();
//     setFetchExisted(res.data);
//   };
//   if (isFetchExisted.length === 0 || isFetchExisted.length > 2) fetchData();
// }, [isFetchExisted]);


// <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link  active" href="../pages/dashboard.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>shop </title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(0.000000, 148.000000)">
//                         <path className="color-background opacity-6" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>
//                         <path className="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Dashboard</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/tables.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>office</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g id="office" transform="translate(153.000000, 2.000000)">
//                         <path className="color-background opacity-6" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"></path>
//                         <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Tables</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/billing.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>credit-card</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(453.000000, 454.000000)">
//                         <path className="color-background opacity-6" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"></path>
//                         <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Billing</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/virtual-reality.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>box-3d-50</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(603.000000, 0.000000)">
//                         <path className="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>
//                         <path className="color-background opacity-6" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"></path>
//                         <path className="color-background opacity-6" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Virtual Reality</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/rtl.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>settings</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(304.000000, 151.000000)">
//                         <polygon className="color-background opacity-6" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
//                         <path className="color-background opacity-6" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"></path>
//                         <path className="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">RTL</span>
//           </a>
//         </li>
//         <li className="nav-item mt-3">
//           <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/profile.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>customer-support</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(1.000000, 0.000000)">
//                         <path className="color-background opacity-6" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"></path>
//                         <path className="color-background" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
//                         <path className="color-background" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Profile</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/sign-in.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>document</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(154.000000, 300.000000)">
//                         <path className="color-background opacity-6" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"></path>
//                         <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Sign In</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link  " href="../pages/sign-up.html">
//             <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
//               {/* <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                 <title>spaceship</title>
//                 <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                   <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
//                     <g transform="translate(1716.000000, 291.000000)">
//                       <g transform="translate(4.000000, 301.000000)">
//                         <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
//                         <path className="color-background opacity-6" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
//                         <path className="color-background opacity-6" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"></path>
//                         <path className="color-background opacity-6" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"></path>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </svg> */}
//             </div>
//             <span className="nav-link-text ms-1">Sign Up</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//     <div className="sidenav-footer mx-3 ">
//       <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
//         <div className="full-background" style="background-image: url('../assets/img/curved-images/white-curved.jpeg')"></div>
//         <div className="card-body text-start p-3 w-100">
//           <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
//             <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon"></i>
//           </div>
//           <div className="docs-info">
//             <h6 className="text-white up mb-0">Need help?</h6>
//             <p className="text-xs font-weight-bold">Please check our docs</p>
//             <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" target="_blank" className="btn btn-white btn-sm w-100 mb-0" rel="noreferrer">Documentation</a>
//           </div>
//         </div>
//       </div>
//       <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
//     </div>


<nav
//       className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
//       id="navbarBlur"
//       navbar-scroll="true"
//     >
//       <div className="container-fluid py-1 px-3">
//         <nav aria-label="breadcrumb">
//           {/* <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
//             <li className="text-sm">
//               <a className="opacity-5 text-dark">Pages</a>
//             </li>
//             <li
//               className="breadcrumb-item text-sm text-dark active"
//               aria-current="page"
//             >
//               {location.pathname}
//             </li>
//           </ol> */}
//          <img src={ProviBillImg} />
//         </nav>
//         <div
//           className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
//           id="navbar"
//         >
//           <div className="ms-md-auto pe-md-3 d-flex align-items-center">
//           </div>
//           <ul className="navbar-nav  justify-content-end">
//           <li className="nav-item dropdown pe-3">

// <a className={dropDown ? "nav-link nav-profile d-flex align-items-center pe-0  show" : "nav-link nav-profile d-flex align-items-center pe-0 "}   onClick={() => toggleDropdown()} data-bs-toggle="dropdown" aria-expanded={dropDown}>
//   <img src={profileImage} alt="Profile" className="rounded-circle" />
//   <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
// </a>

// <ul className= {dropDown ? "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show" : "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"} >
//   <li className="dropdown-header">
//     <span>Change profile picture</span>
//   </li>
//     <hr className="dropdown-divider" />
//   <li>
//     <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
//       <i className="bi bi-person"></i>
//       <span>Upgrade KYC</span>
//     </a>
//   </li>
//   <hr className="dropdown-divider" />
//   <li>
//     <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
//       <i className="bi bi-gear"></i>
//       <span>Reset Password</span>
//     </a>
//   </li>
//   <hr className="dropdown-divider" />
//   <li>
//     <a className="dropdown-item d-flex align-items-center" onClick={logOut}>
//       <i className="fa fa-user me-sm-1"></i>
//       <span>Logout</span>
//     </a>
//   </li>

// </ul>
// </li>
            
//             <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
//               <a className="nav-link text-body p-0" id="iconNavbarSidenav"  onClick={() => toggleNavState()}>
//                 <div className="sidenav-toggler-inner">
//                   <i className="sidenav-toggler-line"></i>
//                   <i className="sidenav-toggler-line"></i>
//                   <i className="sidenav-toggler-line"></i>
//                 </div>
//               </a>
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>



<div className="horizontal-menu">
<nav className="navbar top-navbar col-lg-12 col-12 p-0">
  <div className="container-fluid">
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
      <ul className="navbar-nav navbar-nav-left">
        {/* <li className="nav-item ms-0 me-5 d-lg-flex d-none">
          <a href="#" className="nav-link horizontal-nav-left-menu"><i className="mdi mdi-format-list-bulleted"></i></a>
        </li> */}
        <li className="nav-item dropdown" >
          <a className= {toggoleNotify ? "nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center show" : "nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"}   onClick={() => toggleNotificationsNavState()} id="notificationDropdown" href="#" data-bs-toggle="dropdown" aria-expanded= {toggoleNotify ? "true":"false"}>
            <i className="mdi mdi-bell mx-0"></i>
            <span className="count bg-success">2</span>
          </a>
          <div className= {toggoleNotify ?"dropdown-menu dropdown-menu-right navbar-dropdown preview-list show":"dropdown-menu dropdown-menu-right navbar-dropdown preview-list"} aria-labelledby="notificationDropdown" data-bs-popper={toggoleNotify ? "none":" "}>

            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-information mx-0"></i>
                  </div>
              </div>
              <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="mdi mdi-settings mx-0"></i>
                  </div>
              </div>
              <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="mdi mdi-account-box mx-0"></i>
                  </div>
              </div>
              <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
            <i className="mdi mdi-email mx-0"></i>
            <span className="count bg-primary">4</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
            <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link count-indicator "><i className="mdi mdi-message-reply-text"></i></a>
        </li>
        {/* <li className="nav-item nav-search d-none d-lg-block ms-3">
          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="mdi mdi-magnify"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="search" />
          </div>
        </li>	 */}
      </ul>
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo"/></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logo} alt="logo"/></a>
      </div>
      <ul className="navbar-nav navbar-nav-right">
         
          <li className="nav-item nav-profile dropdown">
          <a className={dropDown ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"}   onClick={() => toggleDropdown()} data-bs-toggle="dropdown" id="profileDropdown" aria-expanded={dropDown}>
              <span className="nav-profile-name">Johnson</span>
              <span className="online-status"></span>
              <img src={profileAvater} alt="profile"/>
            </a>
            <div className= {dropDown ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} >
           
                <a className="dropdown-item">
                  <i className="mdi mdi-settings text-primary"></i>
                  Settings
                </a>
                <a className="dropdown-item" onClick={logOut}>
                  <i className="mdi mdi-logout text-primary"></i>
                  Logout
                </a>
            </div>
          </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle" onClick={() => toggleNavState()}>
        <span className="mdi mdi-menu"></span>
      </button>
    </div>
  </div>
</nav>
<nav className= { toggole ? "bottom-navbar header-toggled": "bottom-navbar"}>
  <div className="container">
      <ul className="nav page-navigation">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="mdi mdi-file-document-box menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className={sideMenu ? "nav-item show-submenu":"nav-item"}  onClick={() => toggleSideMenuState()}>
            <a href="#" className="nav-link">
              <i className="mdi mdi-cube-outline menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="submenu">
                <ul>
                    <li className="nav-item"><a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
            </div>
        </li>
        <li className="nav-item">
            <a href="pages/forms/basic_elements.html" className="nav-link">
              <i className="mdi mdi-chart-areaspline menu-icon"></i>
              <span className="menu-title">Form Elements</span>
              <i className="menu-arrow"></i>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/charts/chartjs.html" className="nav-link">
              <i className="mdi mdi-finance menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/tables/basic-table.html" className="nav-link">
              <i className="mdi mdi-grid menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </a>
        </li>
        <li className="nav-item">
            <a href="pages/icons/mdi.html" className="nav-link">
              <i className="mdi mdi-emoticon menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="mdi mdi-codepen menu-icon"></i>
              <span className="menu-title">Sample Pages</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="submenu">
                <ul className="submenu-item">
                    <li className="nav-item"><a className="nav-link" href="pages/samples/login.html">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/samples/login-2.html">Login 2</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/samples/register.html">Register</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/samples/register-2.html">Register 2</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/samples/lock-screen.html">Lockscreen</a></li>
                </ul>
            </div>
        </li>
        <li className="nav-item">
            <a href="docs/documentation.html" className="nav-link">
              <i className="mdi mdi-file-document-box-outline menu-icon"></i>
              <span className="menu-title">Documentation</span></a>
        </li>
      </ul>
  </div>
</nav>
</div>