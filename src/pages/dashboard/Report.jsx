import ReportCompaign from './ReportCompaign';

const TABLE_HEAD = ["Product ID", "Product Name", "Price", "Subscriptions", "Status"];

const TABLE_ROWS = [
    {
        id: "ABC-234",
        name: "WP AdCenter",
        price: "20",
        sub: "120",
        status: "Available",
    },
    {
        id: "ABC-235",
        name: "WP AdCenter",
        price: "20",
        sub: "120",
        status: "Available",
    },
    {
        id: "ABC-236",
        name: "WP AdCenter",
        price: "20",
        sub: "120",
        status: "Available",
    },
    {
        id: "ABC-237",
        name: "WP AdCenter",
        price: "20",
        sub: "120",
        status: "Restock",
    },
    {
        id: "ABC-238",
        name: "WP AdCenter",
        price: "20",
        sub: "120",
        status: "Available",
    },
];

const data = [
    {
        name: "JAN",
        uv: 42
    },
    {
        name: "FEB",
        uv: 30
    },
    {
        name: "MAR",
        uv: 60
    },
    {
        name: "APR",
        uv: 80
    },
    {
        name: "MAY",
        uv: 100

    },
    {
        name: "JUNE",
        uv: 23
    },
    {
        name: "JULY",
        uv: 38
    }
];

const Report = () => {
    return (


     <>

     
      <ReportCompaign />
        {/* <div>
            <div className="grid grid-cols-3 gap-4 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
                <div className=" shadow-lg p-3 rounded-lg">
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='font-medium text-lg'>Revenue</h1>
                        <h1 className='text-xs'>15 May 2023</h1>
                    </div>
                    <h1 className='mb-2 text-sm text-gray-500'>Today</h1>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl text-gray-700 font-bold'>$ 256.25</h1>
                        <h1 className='font-xs text-gray-500'><span className='text-green-700 font-bold'>30%</span> than last week</h1>
                    </div>
                    <LineChart></LineChart>
                </div>


                <div className=" shadow-lg p-3 rounded-lg">
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='font-medium text-lg'>Orders</h1>
                        <h1 className='text-xs'>15 May 2023</h1>
                    </div>
                    <h1 className='mb-2 text-sm text-gray-500'>Today</h1>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl text-gray-700 font-bold'>1.532</h1>
                        <h1 className='font-xs text-gray-500'><span className='text-red-700 font-bold'>30%</span> than last week</h1>
                    </div>
                    <LineChart></LineChart>
                </div>

                <div className=" shadow-lg p-3 rounded-lg">
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='font-medium text-lg'>Avg.Order Value</h1>
                        <h1 className='text-xs'>15 May 2023</h1>
                    </div>
                    <h1 className='mb-2 text-sm text-gray-500'>Today</h1>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl text-gray-700 font-bold'>4.657</h1>
                        <h1 className='font-xs text-gray-500'><span className='text-green-400 font-bold'>30%</span> than last week</h1>
                    </div>
                    <LineChart ></LineChart>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
                <div className="shadow-lg p-3 rounded-lg">
                    <div className='flex justify-between'>
                        <h1 className='font-medium'>Selling Category</h1>
                        <h1 className='border-b-2 border-gray-400 text-xs'>See All</h1>
                    </div>
                    <div className='mt-6'>
                        <div className="w-full">
                            <div className="flex items-center justify-between gap-4">
                                <Typography color="dark" variant="h6">Facebook</Typography>
                                <Typography color="dark" variant="h6">78%</Typography>
                            </div>
                            <Progress value={78} color="indigo" />
                        </div>

                        <div className="w-full mt-4">
                            <div className="flex items-center justify-between gap-4 ">
                                <Typography color="dark" variant="h6">You Tube</Typography>
                                <Typography color="dark" variant="h6">66%</Typography>
                            </div>
                            <Progress value={66} color="red" />
                        </div>

                        <div className="w-full mt-4">
                            <div className="flex items-center justify-between gap-4">
                                <Typography color="dark" variant="h6">Instagram</Typography>
                                <Typography color="dark" variant="h6">87%</Typography>
                            </div>
                            <Progress value={87} color="purple" />
                        </div>

                        <div className="w-full mt-4">
                            <div className="flex items-center justify-between gap-4">
                                <Typography color="dark" variant="h6">Twitter</Typography>
                                <Typography color="dark" variant="h6">52%</Typography>
                            </div>
                            <Progress value={52} />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 shadow-lg p-3 rounded-lg">
                    <h1 className='font-medium text-lg'>Product Selling</h1>
                    <table className="w-full min-w-max table-auto text-center">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-2">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ id, name, price, sub, status }, index) => (
                                <tr key={id} className="even:bg-blue-gray-50/50">
                                    <td className="p-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            $ {price}
                                        </Typography>
                                    </td>
                                    <td className="p-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {sub}
                                        </Typography>
                                    </td>
                                    <td className="p-2">
                                        <Chip
                                            size="sm"
                                            variant="ghost"
                                            value={status}
                                            color={
                                                status === "Available" ? "blue" : status === "Restock" ? "red" : "red"
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >

            <div className="grid grid-cols-3 gap-4 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
                <div className='shadow-lg p-3 rounded-lg' >

                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='font-medium text-lg'>Most Active Users Location</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-4xl text-gray-700 font-bold'>23.500</h1>
                        <h1 className='font-xs text-gray-500'><span className='text-green-700 font-bold'>30%</span> than last week</h1>
                    </div>
                    <LineChart></LineChart>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='p-2'>London <span className='ms-3'>1604</span></h1>
                            <h1 className='p-2'>UK <span className='ms-3'>1322</span></h1>
                            <h1 className='p-2'>Canada <span className='ms-3'>1024</span></h1>
                        </div>
                        <div>
                            <h1 className='p-2'>US <span className='ms-3'>1204</span></h1>
                            <h1 className='p-2'>Australia <span className='ms-3'>604</span></h1>
                            <h1 className='p-2'>France <span className='ms-3'>200</span></h1>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 shadow-lg p-3 rounded-lg'>
                    <h1 className='mb-4 text-2xl font-medium text-gray-700'>Analytics</h1>
                    <BarChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#ffc658" />
                    </BarChart>
                </div>
            </div>
        </div> */}
     </>
    );
};

export default Report;