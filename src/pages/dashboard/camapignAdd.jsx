import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CampaignAdd() {
  const formArray = [1, 2, 3, 4, 5];
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
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && first) {
      console.log(formNo,"formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && third) {
      console.log(formNo,"formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 3) {
      console.log(formNo,"formNo");
      setFormNo(formNo + 1)
    }
    else if (formNo === 4) {
      console.log(formNo,"formNo");
      setFormNo(formNo + 1)
    }
     else {
      console.log(formNo,"formNo");
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
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-3/4 shadow-md bg-white p-5 ">
        <div className='flex justify-center items-center '>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-gray-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div className="h-96">
              <br /><br />
              <div className=" w-96 ">
                <h1>Choose your Business Objective</h1>

                <select style={{ width: '380px', padding: '9px' }} label="select One Option" value={first} onChange={(e) => setfirst(e.target.value)}>
                  <option disabled={first ? true : false}>Select option</option>
                  {
                    Arr?.map((item) => {
                      console.log(first, "first")
                      return <option value={item} key={item}>{item}</option>
                    })
                  }
                </select>
              </div>

            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>


            <br />
            <h1>BusinessStatus : ____</h1>
            <div>
              <div className="h-96 ">
                <br />

                <div className=" w-96">
                  <h1>Business Status</h1>

                  <select style={{ width: '380px', padding: '9px' }} label="select One Option" value={second} onChange={(e) => setSeconds(e.target.value)}>
                    <option disabled={second ? true : false}>Select option</option>
                    {
                      firstdropDownArr?.map((item) => {
                        console.log(second, "second")
                        return <option value={item} key={item}>{item}</option>
                      })
                    }
                  </select>
                </div>

                <br /><br />

                <div className=" w-96">
                  {
                    second && <select style={{ width: '380px', padding: '9px' }} label="select One Option" value={third} onChange={(e) => setThird(e.target.value)}>
                      <option disabled={third ? true : false}>Select option</option>
                      {
                        secondDropdown[second]?.map((item) => {
                          console.log(third, "third")
                          return <option value={item} key={item}>{item}</option>
                        })
                      }
                    </select>
                  }

                </div>
              </div>
            </div>




            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <br />
            <h1>Business Objective: sell product online</h1>
            <h1>Business Status: sale product online without website first</h1>
            <h1>Suggestions:</h1>
            <div className="">
              <div className="grid gap-4 grid-cols-2  h-96 w-3/5  text-center">
                <div className="border-solid border-2 border-gray-400 text-center">
                  <p>website traffic 1k per month</p>
                  <p>conversion puchase less 50 per month</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                </div>
                <div className="border-solid border-2 border-gray-400 text-center">
                  <p>website traffic 1k per month</p>
                  <p>conversion puchase greater 50 per month</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                </div>
                <div className="border-solid border-2 border-gray-400">

                  <div className="">
                    <div className="text-center">
                      Proposed action on website based

                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="border-solid border-2 border-gray-400 rounded-xl ">01</div>
                      <div className="border-solid border-2 border-gray-400 rounded-xl ">02</div>
                      <div className="border-solid border-2 border-gray-400 rounded-xl ">03</div>
                    </div>

                  </div>

                </div>
                <div className="border-solid border-2 border-gray-400 text-center">
                  <p>suggest campaign name</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                  <p>......................</p>
                </div>

              </div>

            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }
        {
          formNo === 4 && <div>
            <div className="">
              <div className="relative flex flex-col justify-center  overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                  <h1 className="text-3xl font-semibold text-center text-blue-600 underline">
                    Sign in with Facebook
                  </h1>
                  <form className="mt-6">
                    <div className="mb-2">
                      <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Forget Password?
                    </a>
                    <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Login
                      </button>
                    </div>
                  </form>

                  <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }
        {
          formNo === 5 && <div>
            <h1>Run Campaign pending</h1>

            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
          
        }

      </div>
    </div>
  );
}

export default CampaignAdd;