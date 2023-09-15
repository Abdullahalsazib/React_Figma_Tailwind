
function Buynav() {
  return (
    
    <>
        <div>
            <nav className="flex items-center justify-around bg-slate-200 w-full h-[60px]">
                <ul className=" flex items-center justify-center space-x-5"> 
                    <li><a className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]" href="@">Home</a></li>
                    <li><a className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]" href="@">About</a></li>
                    <li><a className="text-[#929ECC] hover:text-gray-800 duration-300 font-semibold text-[16px]" href="@">Contact</a></li>
                </ul>
                <div className=" text-[#37447E] font-mono font-extrabold text-[26px]">
                    <h1>Landing</h1>
                </div>
                <div>
                    <button className=" text-white bg-[#111B47] text-[19px] font-bold w-[160px] py-1 rounded-sm">
                        Buy Now
                    </button>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Buynav