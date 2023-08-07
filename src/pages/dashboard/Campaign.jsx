import ComapaignDonut from "@/charts/ComapaignDonut";
import React,{useState} from "react";
import invite from '../../Assets/invite.png'
import invite2 from '../../Assets/invite2.png'
import invite3 from '../../Assets/invite3.png'
import invite4 from '../../Assets/invite4.png'
import CompaignLine from "@/charts/CompaignLine";
import logo1 from '../../Assets/logo1.png'
import StarRating from "@/charts/Stars";


export const Campaign = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
    // Store the review with the selected rating
    // You can implement your logic here to store the review
  };

  return (
    <>
      <div className="container-fluid pe-0">
        <div className="row mt-5">
        <div className="row pe-0">
          <div className="col card shadow" style={{ marginRight: '30px' }}>
            <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Invite Send
                </h2>
              </div>
             </div>
             <div className="row">
              <div className="col py-2 p-0 ps-3">
               <img src={invite} alt="" style={{width:'45px',height:'35px'}} />
              </div>
              <div className="col-10 ps-4 text-start" style={{fontWeight:'400',fontSize:'34px',color:'#6236FF'}}>
                2
              </div>
             </div>
             <div className="row py-2">
              <div className="col" style={{fontWeight:'400',fontSize:'16px',lineHeight:'normal',letterSpacing:'0.3px'}}>
              <span style={{color:'#0091FF'}}>See Customers</span> that haven’t been sent an invite
              </div>
             </div>
            </div>
          </div>
          <div className="col card shadow" style={{ marginRight: '30px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Click Rate
                </h2>
              </div>
             </div>
             <div className="row">
              <div className="col py-2 p-0 ps-3">
               <img src={invite2} alt="" style={{width:'45px',height:'35px'}} />
              </div>
              <div className="col-10 ps-4 text-start" style={{fontWeight:'400',fontSize:'34px',color:'#6236FF'}}>
                1.0%
              </div>
             </div>
             <div className="row py-2">
              <div className="col" style={{fontWeight:'400',fontSize:'16px',lineHeight:'normal',letterSpacing:'0.3px'}}>
              <span style={{color:'#0091FF'}}>See Customers</span> that haven’t clicked the review invite link
              </div>
             </div>
            </div>
          </div>
          <div className="col card shadow" style={{ marginRight: '30px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Reviews
                </h2>
              </div>
             </div>
             <div className="row">
              <div className="col py-2 p-0 ps-3">
               <img src={invite3} alt="" style={{width:'45px',height:'35px'}} />
              </div>
              <div className="col-10 ps-4 text-start" style={{fontWeight:'400',fontSize:'34px',color:'#26C8F0',letterSpacing:'0.3px'}}>
               40
              </div>
             </div>
             <div className="row py-2">
              <div className="col" style={{fontWeight:'400',fontSize:'16px',lineHeight:'normal',letterSpacing:'0.3px'}}>
              <span style={{color:'#0091FF'}}>See all Customers</span> that leaved the reviews
              </div>
             </div>
            </div>
          </div>
          <div className="col card shadow p-0 m-0" style={{ marginRight: '30px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Invite Send
                </h2>
              </div>
             </div>
             <div className="row">
              <div className="col py-2 p-0 ps-3">
               <img src={invite4} alt="" style={{width:'45px',height:'35px'}} />
              </div>
              <div className="col-10 ps-4 text-start" style={{fontWeight:'400',fontSize:'34px',color:'#26C8F0'}}>
                0.0%
              </div>
             </div>
             <div className="row py-2">
              <div className="col" style={{fontWeight:'400',fontSize:'16px',lineHeight:'normal',letterSpacing:'0.3px'}}>
              <span style={{color:'#0091FF'}}>See Reviews</span> which haven’t been responded to
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pe-0">
          <div className="col-lg-4 card shadow pe-0" style={{marginRight:'35px'}} >
             <div className="card-body">
             <div className="row">
                <div className="col text-center">
                  <h3 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Overall Statistics
                  </h3>
                </div>
              </div>
              <div className="row text-center my-3">
                <div className="col" >
                  <h2 style={{fontWeight:'500',fontSize:'48px',color:'#63666A',letterSpacing:'0.3px'}}>
                    5.0
                  </h2>
                  <p style={{fontWeight:'400',fontSize:'16px',color:'#63666A',letterSpacing:'0.3px'}}>
                    Rating
                  </p>
                </div>
                <div className="col" >
                  <h2 style={{fontWeight:'500',fontSize:'48px',color:'#63666A',letterSpacing:'0.3px'}}>
                    70
                  </h2>
                  <p style={{fontWeight:'400',fontSize:'16px',color:'#63666A',letterSpacing:'0.3px'}}>
                    Reviews
                  </p>
                </div>
               
              </div>
             
              <div className="row">
                <div className="col">
                 <ComapaignDonut />
                </div>
              </div>
          </div>
         
             </div>
             <div className="col-lg card shadow">
          <div className="card-body">
          <div className="row">
            <div className="col-3">
                  <h3 style={{fontWeight:'500',fontSize:'18px',color:'#63666A',letterSpacing:'0.3px'}}>
                  Average Rating
                  </h3>
                </div>
                <div className="col-8">
                  <h3 style={{fontWeight:'500',fontSize:'18px',color:'#0D71E7',letterSpacing:'0.3px'}}>
                  Average Reviews
                  </h3>
                </div>     
                       </div>
                    
                      <div className="row">
                      <CompaignLine />
                      </div>
                      
          </div>
          </div>
        </div>
        <div className="row mt-5 pe-0 me-0">
          <div className="col card shadow"  style={{marginRight:'20px'}}>
<div className="card-body">
                     <div className="row align-items-center ps-3">
                        <div className="col-2 p-0">
                          <img
                            src={logo1}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="col p-0  align-items-center">
                        <div className="row">
                        <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                                fontSize:'18px',
                               
                              }}
                            >
                              Yelp
                            </p>
                          </div>
                      
                        </div>
                        <div className="row">
                        <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "18px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                               
                               
                              }}
                            >
                             {rating}
                            </p>
                          </div>
                          <div className="">
                            <p className=""
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "14px",
                                margin: "-8px 0 0",
                                padding: "0",
                                
                                lineHeight: "normal",
                              }}
                            >
                            <StarRating  onRatingChange={handleRatingChange} />
                            </p>
                          </div>
                          <div  className="d-flex align-items-center">
                            <p className="ps-3"
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "16px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                            40 reviews
                            </p>
                          </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
5/30
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width:'20%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  4/2
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-primary" role="progressbar" style={{width:'35%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  3/8
</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col   ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
2/0
</p>
                        </div>
                        <div className="col  ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'40%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
 1/0
</p>
                        </div>
                        
                      </div>
</div>
          </div>
          <div className="col" style={{marginRight:'20px'}} >
          <div className="col card shadow">
<div className="card-body">
                     <div className="row align-items-center ps-3">
                        <div className="col-2 p-0">
                          <img
                            src={logo1}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="col p-0  align-items-center">
                        <div className="row">
                        <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                                fontSize:'18px',
                               
                              }}
                            >
                              Yelp
                            </p>
                          </div>
                      
                        </div>
                        <div className="row">
                        <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "18px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                               
                               
                              }}
                            >
                             {rating}
                            </p>
                          </div>
                          <div className="">
                            <p className=""
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "14px",
                                margin: "-8px 0 0",
                                padding: "0",
                                
                                lineHeight: "normal",
                              }}
                            >
                            <StarRating  onRatingChange={handleRatingChange} />
                            </p>
                          </div>
                          <div  className="d-flex align-items-center">
                            <p className="ps-3"
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "16px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                            40 reviews
                            </p>
                          </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
5/30
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width:'20%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  4/2
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-primary" role="progressbar" style={{width:'35%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  3/8
</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col   ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
2/0
</p>
                        </div>
                        <div className="col  ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'40%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
 1/0
</p>
                        </div>
                        
                      </div>
</div>
          </div>
          </div>
          <div className="col pe-0 me-0" style={{marginRight:'20px'}}>
          <div className="col card shadow">
<div className="card-body">
                     <div className="row align-items-center ps-3">
                        <div className="col-2 p-0">
                          <img
                            src={logo1}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="col p-0  align-items-center">
                        <div className="row">
                        <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                                fontSize:'18px',
                               
                              }}
                            >
                              Yelp
                            </p>
                          </div>
                      
                        </div>
                        <div className="row">
                        <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "18px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                               
                               
                              }}
                            >
                             {rating}
                            </p>
                          </div>
                          <div className="">
                            <p className=""
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "14px",
                                margin: "-8px 0 0",
                                padding: "0",
                                
                                lineHeight: "normal",
                              }}
                            >
                            <StarRating  onRatingChange={handleRatingChange} />
                            </p>
                          </div>
                          <div  className="d-flex align-items-center">
                            <p className="ps-3"
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "16px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                            40 reviews
                            </p>
                          </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width:'75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
5/30
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width:'20%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  4/2
</p>
                        </div>
                        <div className="col ">
                        <div className="progress">
  <div className="progress-bar bg-primary" role="progressbar" style={{width:'35%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
  3/8
</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col   ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
2/0
</p>
                        </div>
                        <div className="col  ">
                        <div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:'40%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>
 1/0
</p>
                        </div>
                        
                      </div>
</div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
