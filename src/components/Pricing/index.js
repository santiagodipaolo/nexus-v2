export const Pricing = () => {
    return (
        <div id="pricing" className="flex flex-col justify-center items-center bg-black w-full xs:h-[1500px] lg:h-[800px] xl:h-[610px]">
          <section id="how-it-works">
              <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
                <div className="text-center">
                    <p className="mb-5 text-lg">Save 40-70% vs comparable US-based talent</p>
                    <h1 className="text-4xl font-semibold tracking-tighter text-gray-200">
                      Pricing that fits your company
                    </h1>
                    {/* <p className="mt-4 text-base text-lg text-black">
                      At <b className="text-gray-300">Nexus,</b> we are more than a recruitment agency; we are your partners in growth and innovation. Whether you&apos;re looking to expand your company with a skilled professional or team, Nexus is here to support you every step of the way.<br/><br/>
                      Our proprietary matching system ensures that you connect with candidates who not only meet your technical requirements but also align with your company culture and values.
                      From initial screening to final onboarding, Nexus offers end-to-end support, ensuring a smooth transition for both companies and candidates.
                    </p> */}
                  </div>
                  <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3">
                    <div className="flex flex-col justify-between h-full">
                      <div className="p-2 overflow-hidden border rounded-3xl">
                        <div className="p-8 bg-[#f5ede5] border shadow-2xl rounded-2xl lg:p-10">
                          <div>
                            <span className="text-lg font-medium text-black lg:text-2xl">Placement</span>
                            <p className="mt-4 text-base font-medium text-gray-500">
                              We handle the entire hiring process allowing you to interview the top candidates.
                              Once the ideal candidate is found, your company takes care of the documentation and monthly salary payments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="p-2 overflow-hidden border rounded-3xl">
                        <div className="h-[275px] p-8 bg-[#f5ede5] border shadow-2xl rounded-2xl lg:p-10">
                          <div>
                            <span className="text-lg font-medium text-black lg:text-2xl">Staffing</span>
                            <p className="mt-4 text-base font-medium text-gray-500">
                              We take care of the entire hiring process, including all necessary paperwork 
                              and documentation for international hiring and monthly salary payments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="p-2 overflow-hidden border rounded-3xl">
                        <div className="h-[275px] p-8 bg-[#f5ede5] border shadow-2xl rounded-2xl lg:p-10">
                          <div>
                            <span className="text-lg font-medium text-black lg:text-2xl">Teams</span>
                            <p className="mt-4 text-base font-medium text-gray-500">
                              For companies looking to build entire remote teams.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="flex w-[350px] m-auto mt-5">
                      <a href="https://view.forms.app/santiagodipaolo/nexus" target="_blank" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-green-500 my-2 mx-2 hover:bg-green-600" aria-describedby="planDescription" aria-label="Button" type="button">
                        REQUEST A QUOTE
                      </a>
                    </div>
                </div>
          </section>
        </div>
    )
}

export default Pricing;