
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

// import grImg from '../images/response 1.png'
// import rdImg from '../images/response 1 (5).png'
// import blImg from '../images/response 1 (1).png'
// import pinkImg from '../images/response 1 (3).png'
// import adminImg from '../images/response 1 (6).png'
// import img1 from '../images/Rectangle 628.png'
// import img2 from '../images/Rectangle 628 (1).png'
import img2 from '../dashboard/images/Rectangle 628 (1).png';
import img1 from '../dashboard/images/Rectangle 628.png';
import blImg from '../dashboard/images/response 1 (1).png';
import pinkImg from '../dashboard/images/response 1 (3).png';
import rdImg from '../dashboard/images/response 1 (5).png';
import adminImg from '../dashboard/images/response 1 (6).png';
import grImg from '../dashboard/images/response 1.png';
export function Tutorial() {
  return (
    <div>
     
      <div className='md:flex gap-3'>
        <Card className="mt-12  shadow-lg">
          <CardBody>
            <img src={grImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Easy Manage Sales
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <hr />
            <button className="flex items-center text-blue-800 py-2 rounded-lg  gap-2">
              Load More
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-700" />
            </button>
          </CardBody>
        </Card>

        <Card className="mt-12  shadow-lg">
          <CardBody>
            <img src={blImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Profit History
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <hr />
            <button className="flex items-center text-red-600 py-2 rounded-lg  gap-2">
              Load More
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-700" />
            </button>
          </CardBody>
        </Card>

        <Card className="mt-12  shadow-lg">
          <CardBody>
            <img src={rdImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Easy Request Time-off
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <hr />
            <button className="flex items-center text-green-600 py-2 rounded-lg  gap-2">
              Load More
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-700" />
            </button>
          </CardBody>
        </Card>

      </div>

      <div className='grid md:grid-cols-3 gap-3 mt-12'>
        <div className="md:col-span-2 grid bg-white rounded-md shadow-lg md:grid-cols-2">
          <div className='p-3'>
            <img src={pinkImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Community
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <button className="flex items-center text-gray-100 px-3 py-2 rounded-lg bg-gray-700 gap-2">
              <FacebookIcon strokeWidth={2} className="h-5 w-5" /> Connect to Facebook
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-100" />
            </button>
          </div>
          <div>
            <img src={img1} className='w-full' alt="" />
          </div>
        </div>
        <div className="bg-white rounded-md shadow-lg">
          <div className='p-3'>
            <img src={rdImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Twitter Ads
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <button className="flex items-center text-gray-100 px-3 py-2 rounded-lg bg-gray-700 gap-2">
              <TwitterIcon strokeWidth={2} className="h-5 w-5" /> Connect to Twitter
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-100" />
            </button>
          </div>
        </div>
      </div>


      <div className='grid md:grid-cols-3 gap-3 mt-12'>

        <div className="bg-white rounded-md shadow-lg">
          <div className='p-3'>
            <img src={rdImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Youtube Ads
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <button className="flex items-center text-gray-100 px-3 py-2 rounded-lg bg-gray-700 gap-2">
              <YouTubeIcon strokeWidth={2} className="h-5 w-5" /> Connect to Youtube
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-100" />
            </button>
          </div>
        </div>

        <div className="md:col-span-2 grid bg-white rounded-md shadow-lg md:grid-cols-2">
          <div className='p-3'>
            <img src={adminImg} className='w-8 h-8 border p-1 rounded-md' alt="" />
            <Typography variant="h5" className="mb-2 mt-2">
              Admin
            </Typography>
            <Typography className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <button className="flex items-center text-gray-900 py-2 rounded-lg  gap-2">
              Load More
              <ArrowLongRightIcon strokeWidth={2} className="h-6 w-6 border-1 p-1 rounded-md border-gray-700" />
            </button>
          </div>
          <div>
            <img src={img2} className='w-full' alt="" />
          </div>
        </div>

      </div>

    </div>

  )
}

export default Tutorial