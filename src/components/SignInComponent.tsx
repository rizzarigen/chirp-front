



const SignInComponent = () => {
    return [
        <div className="absolute  sm:w-md lg:w-lg bg-white px-16 py-6 rounded-2xl m-auto shadow-card">
            <div className="grid grid-cols-1 grid-rows-4 gap-6 font-jura font-bold">
                <p className=" text-[32px] text-shadow-chirp text-shadow-lg/30">sign in</p>
                <input type="text" className="bg-input py-5 pl-4 w-full rounded-2xl text-xs" placeholder="nickname"/>
                <input type="password" className="bg-input py-5 pl-4 w-full rounded-2xl text-xs" placeholder="password"/>
                <button className="bg-chirp-red text-white py-5 pl-4 w-full rounded-2xl text-base hover:scale-102 transition-transform ease-out cursor-pointer">sign in</button>
                
                
            </div>
        </div>
    ]
}

export default SignInComponent;