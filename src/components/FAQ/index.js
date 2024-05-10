import Image from "next/image"

import QuestionMark from "../../../public/question-mark.png"
import ArrowDown from "../../../public/arrow-down.png"

const Faq = () => {

  return (
    <div className="flex flex-col justify-center xs:p-10 md:p-0 items-center bg-[url('/faq-bg.png')] xs:h-[950px] md:h-[650px] lg:h-[615px] xl:h-[505px] w-full">
        <h1 className="font-semibold text-black text-3xl text-center mt-10 mb-5">Frequently asked <i>questions</i></h1>
        <div className="flex flex-row mb-16 text-white">
            <div className="join join-vertical w-full md:w-[600px] xl:w-[800px] bg-black lg:mr-10">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        What happens if the role I require is not specified on the website?
                    </div>
                    <div className="collapse-content"> 
                        <p>If the role you require is not currently listed on our website, please do not hesitate to still fill out the form or to contact us directly. Our highly skilled team sources people from a wide variety of sectors so it is highly likely that we are still able to assist you with your recruitment needs. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        How is my employee&apos;s salary handled? 
                    </div>
                    <div className="collapse-content"> 
                        <p>You can trust us to take care of your payroll needs with our Staffing model, so that you can focus on your core business operations. We have an efficient and reliable payroll system in place to ensure that cross-border payments to  your employees are paid on time and in compliance with all relevant regulations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        What procedures do I need to follow to hire an international employee?
                    </div>
                    <div className="collapse-content"> 
                        <p>Hiring an international employee can be a complex process, involving various legal and bureaucratic requirements. However, you don&apos;t need to worry about any of that! We can handle all of the paperwork and bureaucracy on your behalf. There are no extra costs or hidden fees involved; everything is included in the flat fee that we quote you.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Do I have to pay anything if a suitable candidate is not found?
                    </div>
                    <div className="collapse-content"> 
                        <p>No, you do not need to pay anything if we are unable to find a suitable candidate for your specific requirements. We offer a risk-free solution to our clients, no candidate found = nothing paid.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" /> 
                    <div className="collapse-title text-xl font-medium">
                        Can I provide a computer or other work related items to my employee? 
                    </div>
                    <div className="collapse-content"> 
                        <p>Yes, certainly. This can be discussed during the hiring process and we can assist you.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute right-0 xs:hidden md:hidden xl:block">
            <Image alt="question mark" src={QuestionMark} height={300} width={301} /> 
        </div>
    </div>
  )
}

export default Faq