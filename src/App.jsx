
function App() {

  return (

    <div className="container flex items-center justify-center h-screen">
      <div className="grid grid-cols-4 gap-4 mx-auto">
        <a href="#" className="flex items-center justify-center h-40 p-6 transition duration-300 bg-white border rounded-lg shadow-md hover:bg-gray-100 w-72">
          <div className="text-center">

            <span className="text-lg font-semibold">Student</span>
          </div>
        </a>
        <a href="#" className="flex items-center justify-center h-40 p-6 transition duration-300 bg-white border rounded-lg shadow-md hover:bg-gray-100 w-72">
          <div className="text-center">

            <span className="text-lg font-semibold">Teacher</span>
          </div>
        </a>
        <a href="#" className="flex items-center justify-center h-40 p-6 transition duration-300 bg-white border rounded-lg shadow-md hover:bg-gray-100 w-72">
          <div className="text-center">

            <span className="text-lg font-semibold">Cash Management</span>
          </div>
        </a>
        <a href="#" className="flex items-center justify-center h-40 p-6 transition duration-300 bg-white border rounded-lg shadow-md hover:bg-gray-100 w-72">
          <div className="text-center">

            <span className="text-lg font-semibold">Super Admin</span>
          </div>
        </a>
      </div>
    </div>

  )
}

export default App

