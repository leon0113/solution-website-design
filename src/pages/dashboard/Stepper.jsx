import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { ToastContainer, toast } from 'react-toastify';



import { useDispatch } from 'react-redux';


export function DashboardStep() {
  const steps = ['Login with Facebook', 'Select Bus Status', 'Review Suggestion', 'Create Ad', 'Run Campaign']
  const formArray = [1, 2, 3, 4, 5];

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [formNo, setFormNo] = useState(formArray[0])
  const [first, setfirst] = useState('')
  const [second, setSeconds] = useState('')
  const [third, setThird] = useState('')
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: ''
  })
  let Arr = ['Sale Product Online', 'Get More App Install', 'Increase Brand Awareness', 'Get More Store Trafic']
  const firstdropDownArr = ['Sale Product Online With a Website', 'Sale Product Online Without Website']
  const secondDropdown = {
    'Sale Product Online With a Website': ['New Business', 'Established Business'],
    'Sale Product Online Without Website': ['New Business', 'Established Business']
  }

const dispatch = useDispatch()

  

 
  
  const next = () => {
    if (formNo === 1 && first) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && third) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 3) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 4) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1)
    }
    else {
      console.log(formNo, "formNo");
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const responseFacebook = (response) => {
    console.log('login result',response);
    let token = response.accessToken
    const userId = JSON.parse(localStorage.getItem('user'));
    console.log(token,userId.user.id,"asasa");

  }
  const componentClicked =(data)=>{
    console.log(data,"data");
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length === 0) {
     
  //   } else {
  //     setErrors(validationErrors);
  //     return
  //   }

  //   setData({
  //     email: "",
  //     password: "",
  //   });
  // };

  // const validateForm = () => {
  //   let errors = {};

  //   if (!data.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!data.password) {
  //     errors.password = "Password is required";
  //   }

  //   return errors;
  // };

  const loginFb = async () =>{

    // Make a GET request
fetch('http://localhost:4000/auth/facebook/callback', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // Send cookies along with the request
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

    //  await dispatch(loginFB())
    
  }

  const ResFB = (response) => {
    console.log(response);
  }
  
  return (
   <form action="">
     <div className="row"  style={{}}>
      <ToastContainer />
      <div className="card shadow-md bg-white my-5">
        {/* <div className='flex justify-center items-center mt-5'>
          {
            steps.map((v, i) => <><div className={`w-40 h-14 text-white rounded-md  ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === steps.length ? 'bg-blue-500' : 'bg-gray-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== steps.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 4 || formNo === steps.length ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
              }
            </>)
          }
        </div> */}
        {
          formNo === 1 && 
          <div className='row'>
                         {/* <div className="row w-100 mt-4">
                          <div className="col-4">
                            <label
                              style={{ color: "black" }}
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              E-mail
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="email"
                              type="email"
                              className="form-control rounded-5 border border"
                              autoComplete="off"
                              value={data.email}
                              onChange={handleChange}
                            />
                            <div className="mt-2" style={{color:'red'}}>
                              {errors.email && <div>{errors.email}</div>}
                            </div>
                          </div>
                        </div>
                        <div className="row w-100 my-3">
                          <div className="col-4">
                            <label
                              style={{ color: "black" }}
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              Password
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <input
                              name="password"
                              value={data.password}
                              type="Password"
                              className="form-control rounded-5 border"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <div className="mt-2" style={{color:'red'}}>
                              {errors.password && <div>{errors.password}</div>}
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="col mt-5 w-25 text-center mb-4">
                          <buttton className="btn btn-lg btn-primary"  onClick={loginFb}>Login with Facebook</buttton>
                        </div> */}

                        <FacebookLogin
    appId="1258635341706488"
    // autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={ResFB} />
          </div>

          
        }

        {
          // formNo === 2 && <div>


          //   <br />
          //   <h1>BusinessStatus : ____</h1>
          //   <div>
          //     <div className="h-96 ">
          //       <br />

          //       <div className=" w-96">
          //         <h1>Business Status</h1>

          //         <select style={{ width: '380px', padding: '9px' }} label="select One Option" value={second} onChange={(e) => setSeconds(e.target.value)}>
          //           <option disabled={second ? true : false}>Select option</option>
          //           {
          //             firstdropDownArr?.map((item) => {
          //               console.log(second, "second")
          //               return <option value={item} key={item}>{item}</option>
          //             })
          //           }
          //         </select>
          //       </div>

          //       <br /><br />

          //       <div className=" w-96">
          //         {
          //           second && <select style={{ width: '380px', padding: '9px' }} label="select One Option" value={third} onChange={(e) => setThird(e.target.value)}>
          //             <option disabled={third ? true : false}>Select option</option>
          //             {
          //               secondDropdown[second]?.map((item) => {
          //                 console.log(third, "third")
          //                 return <option value={item} key={item}>{item}</option>
          //               })
          //             }
          //           </select>
          //         }

          //       </div>
          //     </div>
          //   </div>




          //   <div className='mt-4 gap-3 flex justify-center items-center'>
          //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Previous</button>
          //     <button onClick={next} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Next</button>
          //   </div>
          // </div>
        }

        {
          // formNo === 3 && <div>
          //   <br />
          //   <h1>Business Objective: sell product online</h1>
          //   <h1>Business Status: sale product online without website first</h1>
          //   <h1>Suggestions:</h1>
          //   <div className="">
          //     <div className="grid gap-4 grid-cols-2  h-96 w-3/5  text-center">
          //       <div className="border-solid border-2 border-gray-400 text-center">
          //         <p>website traffic 1k per month</p>
          //         <p>conversion puchase less 50 per month</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //       </div>
          //       <div className="border-solid border-2 border-gray-400 text-center">
          //         <p>website traffic 1k per month</p>
          //         <p>conversion puchase greater 50 per month</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //       </div>
          //       <div className="border-solid border-2 border-gray-400">

          //         <div className="">
          //           <div className="text-center">
          //             Proposed action on website based

          //           </div>

          //           <div className="grid grid-cols-3 gap-4">
          //             <div className="border-solid border-2 border-gray-400 rounded-xl ">01</div>
          //             <div className="border-solid border-2 border-gray-400 rounded-xl ">02</div>
          //             <div className="border-solid border-2 border-gray-400 rounded-xl ">03</div>
          //           </div>

          //         </div>

          //       </div>
          //       <div className="border-solid border-2 border-gray-400 text-center">
          //         <p>suggest campaign name</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //         <p>......................</p>
          //       </div>

          //     </div>

          //   </div>
          //   <div className='mt-4 gap-3 flex justify-center items-center'>
          //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Previous</button>
          //     <button onClick={next} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Next</button>
          //   </div>
          // </div>
        }
        {
          // formNo === 4 && <div>
          //   <div className="">
          //     <div className="relative flex flex-col justify-center  overflow-hidden">
          //       <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          //         <h1 className="text-3xl font-semibold text-center text-blue-600 underline">
          //           Sign in with Facebook
          //         </h1>
          //         {/* <form className="mt-6">
          //           <FacebookLogin
          //             appId="534592268620686"
          //             autoLoad={true}
          //             fields="name,email,picture"
          //             onClick={componentClicked}
          //             callback={responseFacebook} />
          //         </form> */}

          //         <p className="mt-8 text-xs font-light text-center text-gray-700">
          //           {" "}
          //           Don't have an account?{" "}
          //           <a
          //             href="#"
          //             className="font-medium text-blue-600 hover:underline"
          //           >
          //             Sign up
          //           </a>
          //         </p>
          //       </div>
          //     </div>
          //   </div>
          //   <div className='mt-4 gap-3 flex justify-center items-center'>
          //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Previous</button>
          //     <button onClick={next} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Next</button>
          //   </div>
          // </div>
        }
        {
          // formNo === 5 && <div>
          //   <h1>Run Campaign pending</h1>

          //   <div className='mt-4 gap-3 flex justify-center items-center'>
          //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Previous</button>
          //     <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-64 text-white bg-blue-500'>Submit</button>
          //   </div>
          // </div>

        }

      </div>
    </div>
   </form>
  );
}

export default DashboardStep;