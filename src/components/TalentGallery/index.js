import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const TalentGallery = () => {
    return (
        <div id="talent" className="xs:max-w-xs md:max-w-full mt-40"> 
            <div className="text-4xl flex flex-row text-black justify-center mb-8">
                <GoArrowUpRight />
                <h1 className="font-semibold">
                    Connecting <i>talented people</i> <br/>
                    with <i>innovative companies</i>
                </h1>
            </div>

            {/* carousel */}
            <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-black border-b border-gray-500 h-[500px]">

                {/* first image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                    <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-1-min.png" className="" />
                </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        María Rodriguez, <br/>
                        <p className="text-lg"><i><b>Creative Director</b></i></p>
                    </div>
                </div> 

                 {/* second image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-7.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Federico González, <br/>
                        <p className="text-lg"><i><b>Software Engineer</b></i></p>
                    </div>
                </div> 

                 {/* third image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-2-min.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Santiago Hernandez, <br/>
                        <p className="text-lg"><i><b>Full Stack Engineer</b></i></p>
                    </div>
                </div> 

                 {/* fourth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-3-min.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Valentina López, <br/>
                        <p className="text-lg"><i><b>Brand Designer</b></i></p>
                    </div>
                </div> 

                 {/* fifth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-4-min.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Lucas Muñoz, <br/>
                        <p className="text-lg"><i><b>Account Executive</b></i></p>
                    </div>
                </div> 

                 {/* sixth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-5-min.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Joao Silva, <br/>
                        <p className="text-lg"><i><b>Marketing Executive</b></i></p>
                    </div>
                </div> 

                 {/* seventh image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-8.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Francisco Herrera, <br/>
                        <p className="text-lg"><i><b>Business Intelligence Analyst</b></i></p>
                    </div>
                </div>

                {/* eigth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-9.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Pablo Etcheverry, <br/>
                        <p className="text-lg"><i><b>Data Analyst</b></i></p>
                    </div>
                </div>

                {/* ninth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-10.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Eugenia Sanchez M, <br/>
                        <p className="text-lg"><i><b>Data Scientist</b></i></p>
                    </div>
                </div>

                {/* tenth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-11.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Adriana Do Lima, <br/>
                        <p className="text-lg"><i><b>ML Engineer</b></i></p>
                    </div>
                </div>

                {/* eleventh image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-12.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Emilia Fernández, <br/>
                        <p className="text-lg"><i><b>Frontend Engineer</b></i></p>
                    </div>
                </div>

                {/* twelfth image */}
                <div className="carousel-item flex flex-col bg-blue-200">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-13.png" className="" />
                    </div>
                    <div className="bg-[#F8F5F2] text-black py-5 px-5 text-center">
                        Pilar Pereira, <br/>
                        <p className="text-lg"><i><b>Solutions Architect</b></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentGallery;
