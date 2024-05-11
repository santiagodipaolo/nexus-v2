import Image from "next/image"
import ArrowDown from "../../../public/arrow-down.png"

const BenefitsTable = () => {
  return (
    <div id="about" className="flex flex-col justify-center xs:p-10 md:p-0 items-center mt-20 bg-[url('/background-1.png')] w-full">
        <Image alt="arrow down" style={{width:"30px", height:"auto"}} src={ArrowDown} className="mt-5" />
        <h1 className="font-semibold text-white text-3xl text-center mt-10 mb-10">Why hire in <i>LatAm?</i></h1>
        <div className="overflow-x-auto xs:max-w-xs md:max-w-xl mb-[-70px] shadow-xl">
            <table className="table border border-black text-center">
                {/* head */}
                <thead className="bg-black text-white text-lg">
                <tr>
                    <th className="border-r border-gray-500"><i>Benefits</i></th>
                    <th className=""><i>For your business</i></th>
                </tr>
                </thead>
                <tbody className="bg-[#F8F5F2] text-black">
                {/* row 1 */}
                <tr>
                    <th className="border-r border-gray-500 text-lg"><i>Lower cost</i></th>
                    <td className="border-r border-gray-500">Depending on the role, salaries in Latin America can save between 40% and 70% for the company. </td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th className="border-r border-gray-500 text-lg"><i>Cultural Fit</i></th>
                    <td className="border-r border-gray-500">Latin American professionals excel in US companies by adapting to dynamic cultures and mirroring dedicated work ethic, spirit and agility.</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th className="border-r border-gray-500 text-lg"><i>US Times Zones</i></th>
                    <td className="border-r border-gray-500">LatAm and US time zones are typically aligned, making coordination and communication between the regions convenient and efficient. </td>
                </tr>
                {/* row 4 */}
                <tr>
                    <th className="border-r border-gray-500 text-lg"><i>Strong English</i></th>
                    <td className="border-r border-gray-500">Many people have a high level of English proficiency, allowing them to communicate well in the global professional market.</td>
                </tr>
                {/* row 5 */}
                <tr>
                    <th className="border-r border-gray-500 text-lg"><i>High Motivation</i></th>
                    <td className="border-r border-gray-500">Low salaries in LatAm make the possibility of earning a US dollar salary a strong motivator for workers in the region.</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BenefitsTable