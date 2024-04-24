export default function VideoPlayer() {
    return (
       <div className="bg-white mt-20 mb-20">
            <h1 className="flex justify-center md:text-3xl xs:text-2xl font-semibold mb-10 text-black">We need to change <i>this title</i></h1>
            <div
                className="bg-[url('/faq-bg.png')] xs:max-w-xs md:max-w-2xl lg:max-w-4xl"
                style={{
                    position: 'relative',
                    width: '800px', 
                    height: '550px', 
                    margin: '0 auto', 
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', 
                    overflow: 'hidden',
                    border: '5px',
                    borderRadius:'5px' 
                }}
            >
                <iframe
                    src="https://www.youtube.com/embed/LWXQdw-YvVM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{
                        position: 'relative',
                        padding: '10px',
                        width: '100%',
                        height: '100%',
                        border: '5px',
                        borderRadius:'15px'
                    }}
                ></iframe>
            </div>
      </div>
    );
}