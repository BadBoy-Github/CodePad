


const Header = () => {
  return (
    <div className=" w-full h-20 flex items-center justify-between">
      <div className="bg-teal-200 h-full flex items-center justify-between px-4 rounded-xl">
        <div className="w-14 h-14 bg-teal-100 rounded-full flex justify-center items-center">
          <img src="/logo.png" alt="CodePad" className="p-1" />
        </div>
        <div className="ml-6 flex flex-col items-start">
          <h1 className=" font-bold text-teal-600 text-2xl">CodePad</h1>
          <p className="text-teal-800 text-sm">code like pro</p>
        </div>
      </div>
      <div className="bg-teal-200 w-96 h-full rounded-xl"></div>
    </div>
  );
}

export default Header