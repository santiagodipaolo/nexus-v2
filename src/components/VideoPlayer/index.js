export default function VideoPlayer() {
    return (
       <div className="bg-white mt-20 mb-20">
        <h1 className="flex justify-center text-3xl font-semibold mb-10 text-black">We need to change this title</h1>
        <div className="bg-[url('/faq-bg.png')] flex items-center justify-center">
            <video className="h-[400px] w-[400px] rounded-lg" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div> 
    );
}