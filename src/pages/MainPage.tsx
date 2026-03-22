import ChirpPanel from "../components/ChirpPanel";

const MainPage = () => {
    return [
        <div className="w-screen h-dvh flex flex-col items-center pb-4">
            <p className="my-4 mx-auto text-6xl font-jura font-bold text-shadow-chirp">chirps.</p>
            <ChirpPanel/>
        </div>
    ]
}

export default MainPage;