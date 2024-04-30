import Image from "next/image"
import ArrowDown from "../../../public/arrow-down.png"

const BenefitsTable = () => {
  return (
    <div id="about" className="flex flex-col justify-center xs:p-10 md:p-0 items-center mt-20 bg-[url('/background-1.png')] w-full">
        <Image alt="arrow down" height={30} width={30} src={ArrowDown} className="mt-5" />
        <h1 className="font-semibold text-white text-3xl text-center mt-10 mb-10">We&apos;ve got the <br/> best of <i>both worlds</i></h1>
        <div className="overflow-x-auto xs:max-w-xs md:max-w-xl mb-[-70px] shadow-xl">
            <table className="table border border-black text-center">
                {/* head */}
                <thead className="bg-black text-white text-lg">
                <tr>
                    <th className="border-r border-gray-500"><i>great benefits</i></th>
                    <th className="border-r border-gray-500"><i>for your startup</i></th>
                    <th><i>for our talent</i></th>
                </tr>
                </thead>
                <tbody className="bg-white text-black">
                {/* row 1 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Payment</i></th>
                    <td className="border-r border-gray-500">Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Time Zone</i></th>
                    <td className="border-r border-gray-500">Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Opportunities</i></th>
                    <td className="border-r border-gray-500">Brice Swyre</td>
                    <td>Tax Accountant</td>
                </tr>
                {/* row 4 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Convinience</i></th>
                    <td className="border-r border-gray-500">Brice Swyre</td>
                    <td>Tax Accountant</td>
                </tr>
                {/* row 5 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Trouble Shooting</i></th>
                    <td className="border-r border-gray-500">Brice Swyre</td>
                    <td>Tax Accountant</td>
                </tr>
                {/* row 6 */}
                <tr>
                    <th className="border-r border-gray-500"><i>Management</i></th>
                    <td className="border-r border-gray-500">Brice Swyre</td>
                    <td>Tax Accountant</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BenefitsTable