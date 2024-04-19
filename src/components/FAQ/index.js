import Image from "next/image"

import QuestionMark from "../../../public/question-mark.png"
import ArrowDown from "../../../public/arrow-down.png"

const Faq = () => {

  return (
    <div className="flex flex-col justify-center xs:p-10 md:p-0 items-center bg-[url('/faq-bg.png')] xs:h-[700px] md:h-[505px] w-full">
        <h1 className="font-semibold text-black text-3xl text-center mt-10 mb-10">Frequently asked <i>questions</i></h1>
        <div className="flex flex-row mb-16">
            <div className="join join-vertical w-full md:w-[600px] xl:w-[800px] bg-black xl:h-[310px] lg:mr-10">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute right-0 xs:hidden md:hidden xl:block">
            <Image alt="question mark" src={QuestionMark} height={300} width={300} /> 
        </div>
    </div>
  )
}

export default Faq