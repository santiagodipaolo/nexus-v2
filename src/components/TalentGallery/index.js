import Image from "next/image";

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const TalentGallery = () => {
    return (
        <div id="talent" className="xs:max-w-xs md:max-w-full mt-40"> 
            <div className="flex flex-col">
                <div className="lg:text-3xl md:text-xl md:m-5 flex text-black text-center justify-center mb-8">
                    {/* <GoArrowUpRight /> */}
                    <h1 className="font-semibold">
                        We&apos;re sector agnostic and source people from <b><i>all skill levels</i></b> to fit your specific needs
                    </h1>
                </div>
                <div className="xl:flex xs:grid xs:grid-cols-1 md:m-10 md:grid-cols-2 xl:flex-row justify-center">
                    <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">SALES AND MARKETING</div>
                    <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">DEVELOPMENT AND SOFTWARE ENGINEERING</div>
                    <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">UX/UI AND DESIGN</div>
                    <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">FINANCE AND ACCOUNTING</div>
                    <div className="badge badge-outline font-thin text-gray-600 m-1 xs:text-xs">CUSTOM SUPPORT OPS AND VIRTUAL ASSISTANCE</div>
                </div>
            </div>

            {/* carousel */}
            <div className="carousel carousel-center max-w-full pb-2 space-x-4 bg-[#f5ede5] border-b border-gray-500 h-[500px]">
            <FaArrowCircleLeft className="absolute mt-40 z-50 xs:left-8 md:left-0 bg-black text-white" style={{width:'40px', height:'auto', borderRadius:'30px'}}/>
                {/* first image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-1-min.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        María Rodriguez, <br/>
                        <p className="text-xl"><i><b>Creative Director</b></i></p>
                    </div>
                </div> 

                 {/* second image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-7.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Federico González, <br/>
                        <p className="text-xl"><i><b>Software Engineer</b></i></p>
                    </div>
                </div> 

                 {/* third image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-2-min.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Santiago Hernandez, <br/>
                        <p className="text-xl"><i><b>Full Stack Engineer</b></i></p>
                    </div>
                </div> 

                 {/* fourth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-3-min.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Valentina López, <br/>
                        <p className="text-xl"><i><b>Brand Designer</b></i></p>
                    </div>
                </div> 

                 {/* fifth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-4-min.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Lucas Muñoz, <br/>
                        <p className="text-xl"><i><b>Account Executive</b></i></p>
                    </div>
                </div> 

                 {/* sixth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-5-min.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Joao Silva, <br/>
                        <p className="text-xl"><i><b>Marketing Executive</b></i></p>
                    </div>
                </div> 

                 {/* seventh image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-8.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Francisco Herrera, <br/>
                        <p className="text-xl"><i><b>Business Intelligence Analyst</b></i></p>
                    </div>
                </div>

                {/* eigth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-9.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Pablo Etcheverry, <br/>
                        <p className="text-xl"><i><b>Data Analyst</b></i></p>
                    </div>
                </div>

                {/* ninth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-10.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Eugenia Sanchez M, <br/>
                        <p className="text-xl"><i><b>Data Scientist</b></i></p>
                    </div>
                </div>

                {/* tenth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-11.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Adriana Do Lima, <br/>
                        <p className="text-xl"><i><b>ML Engineer</b></i></p>
                    </div>
                </div>

                {/* eleventh image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-12.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Emilia Fernández, <br/>
                        <p className="text-xl"><i><b>Frontend Engineer</b></i></p>
                    </div>
                </div>

                {/* twelfth image */}
                <div className="carousel-item flex flex-col bg-[#e4d0bc]">
                    <div className="w-full h-full" style={{ height: '500px', width:'300px', position: 'relative' }}>
                        <Image alt="talent" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src="/people/people-13.png" className="" />
                    </div>
                    <div className="bg-[#fcfbfa] text-black py-5 px-5 text-start text-lg">
                        Pilar Pereira, <br/>
                        <p className="text-xl"><i><b>Solutions Architect</b></i></p>
                    </div>
                </div>
                <FaArrowCircleRight className="absolute md:right-0 xs:right-10 mt-40 z-50 bg-black text-white" style={{width:'40px', height:'auto', borderRadius:'30px'}}/>
            </div>
        </div>
    )
}

export default TalentGallery;
