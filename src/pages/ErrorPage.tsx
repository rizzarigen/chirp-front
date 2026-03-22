

const ErrorPage = () => {
    return [
        <div className="w-screen h-screen bg-chirp-red relative">
            <div className="text-white text-shadow-chirp h-full w-screenflex flex flex-col justify-center items-center">
                <p className=" font-bold font-jura text-[64px] mr-28">//error</p>
                <p className="font-montserrat font-bold text-9xl line leading-20">404</p>
                <button className="mt-14 py-4 px-10 bg-white text-black font-jura rounded-2xl font-bold 
                cursor-pointer hover:scale-102 transition-transform ease-out shadow-card">на главную</button>
                
            </div>
            <div className="absolute bottom-10 w-screen flex justify-center">
                <p className="font-jura text-[64px] text-white font-bold text-shadow-chirp">chirps.</p>
            </div>
            
            
        </div>
    ]
}

export default ErrorPage;