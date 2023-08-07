import { Switch } from "@mui/material";

const reportCompaignTable = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col card">
    <div className="table-responsive mt-3">
    <table className="table table-hover text-center">
    <thead >
      <tr  style={{background:'#EBEBEB' , color:'#6E6B7B' ,fontSize:'16px'}}>
        <th scope="col">On/Off</th>
        <th scope="col">Compaign</th>
        <th scope="col">Delivery</th>
        <th scope="col">Bid Strategy</th>
        <th scope="col">Budget</th>
        <th scope="col">Attribution Setting</th>
        <th scope="col">Results</th>
        <th scope="col">Reach</th>
        <th scope="col">Impressions</th>
        <th scope="col">Cost</th>
        <th scope="col">Amount spent</th>
        <th scope="col">Object</th>
        <th scope="col">Start</th>
        <th scope="col">End</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" className='d-flex'> 
              {/* <input className="checking" type="checkbox" 
              id='switch'
              // id={`switch${i}`} 
              // checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
              // onChange={() => toggleUserStatus(user.id)}
              />
              <label 
              // htmlFor={
              //     `switch${i}`}
  
               className="labelToggle"></label> */}
  
  
                 <Switch
                            defaultChecked
                            sx={{
                              "& .MuiSwitch-colorPrimary": {
                                color: "#28C76F",
                              },
                            }}
                          /> 
            </th>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>New Traffic Compaign</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Active</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Highest Volume</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$1.5400 <span style={{fontSize:'12px'}}>Lifetime</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>7 Days Click</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,5400 <span style={{fontSize:'12px'}}>link clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>30456</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$0.31 <span style={{fontSize:'12px'}}>clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$79,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 13,2023</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 31,2023</td>
  
  
  
      </tr>




      <tr>
        <th scope="row" className='d-flex'> 
              {/* <input className="checking" type="checkbox" 
              id='switch'
              // id={`switch${i}`} 
              // checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
              // onChange={() => toggleUserStatus(user.id)}
              />
              <label 
              // htmlFor={
              //     `switch${i}`}
  
               className="labelToggle"></label> */}
  
  
                 <Switch
                            defaultChecked
                            sx={{
                              "& .MuiSwitch-colorPrimary": {
                                color: "#28C76F",
                              },
                            }}
                          /> 
            </th>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>New Traffic Compaign</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Active</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Highest Volume</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$1.5400 <span style={{fontSize:'12px'}}>Lifetime</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>7 Days Click</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,5400 <span style={{fontSize:'12px'}}>link clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>30456</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$0.31 <span style={{fontSize:'12px'}}>clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$79,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 13,2023</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 31,2023</td>
  
  
  
      </tr>






      <tr>
        <th scope="row" className='d-flex'> 
              {/* <input className="checking" type="checkbox" 
              id='switch'
              // id={`switch${i}`} 
              // checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
              // onChange={() => toggleUserStatus(user.id)}
              />
              <label 
              // htmlFor={
              //     `switch${i}`}
  
               className="labelToggle"></label> */}
  
  
                 <Switch
                            defaultChecked
                            sx={{
                              "& .MuiSwitch-colorPrimary": {
                                color: "#28C76F",
                              },
                            }}
                          /> 
            </th>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>New Traffic Compaign</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Active</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Highest Volume</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$1.5400 <span style={{fontSize:'12px'}}>Lifetime</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>7 Days Click</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,5400 <span style={{fontSize:'12px'}}>link clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>30456</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$0.31 <span style={{fontSize:'12px'}}>clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$79,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 13,2023</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 31,2023</td>
  
  
  
      </tr>




      <tr>
        <th scope="row" className='d-flex'> 
              {/* <input className="checking" type="checkbox" 
              id='switch'
              // id={`switch${i}`} 
              // checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
              // onChange={() => toggleUserStatus(user.id)}
              />
              <label 
              // htmlFor={
              //     `switch${i}`}
  
               className="labelToggle"></label> */}
  
  
                 <Switch
                            defaultChecked
                            sx={{
                              "& .MuiSwitch-colorPrimary": {
                                color: "#28C76F",
                              },
                            }}
                          /> 
            </th>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>New Traffic Compaign</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Active</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Highest Volume</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$1.5400 <span style={{fontSize:'12px'}}>Lifetime</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>7 Days Click</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,5400 <span style={{fontSize:'12px'}}>link clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>30456</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$0.31 <span style={{fontSize:'12px'}}>clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$79,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 13,2023</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 31,2023</td>
  
  
  
      </tr>






      <tr>
        <th scope="row" className='d-flex'> 
              {/* <input className="checking" type="checkbox" 
              id='switch'
              // id={`switch${i}`} 
              // checked={user?.user_status_title === "1" && user?.user_status_title !== "0"}
              // onChange={() => toggleUserStatus(user.id)}
              />
              <label 
              // htmlFor={
              //     `switch${i}`}
  
               className="labelToggle"></label> */}
  
  
                 <Switch
                            defaultChecked
                            sx={{
                              "& .MuiSwitch-colorPrimary": {
                                color: "#28C76F",
                              },
                            }}
                          /> 
            </th>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>New Traffic Compaign</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Active</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>Highest Volume</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$1.5400 <span style={{fontSize:'12px'}}>Lifetime</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>7 Days Click</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,5400 <span style={{fontSize:'12px'}}>link clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>30456</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$0.31 <span style={{fontSize:'12px'}}>clicks</span></td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$16,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>$79,897</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 13,2023</td>
        <td className='' style={{color:'#6E6B7B' , fontWeight:'500' ,fontSize:'8'}}>May 31,2023</td>
  
  
  
      </tr>
      
      
    </tbody>
  </table>
    </div>
          </div>
        </div>
    </div>
  )
}

export default reportCompaignTable