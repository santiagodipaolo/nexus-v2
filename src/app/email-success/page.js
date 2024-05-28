import Link from 'next/link';

const EmailSentPage = () => {
  return (
    <div className="bg-[#f5ede5] flex min-h-screen flex-col text-center items-center pb-20 justify-center">
        <p className="xs:text-xl xs:p-12 md:text-2xl font-semibold text-gray-800">Your email was sent successfully! <br/> We will be in touch shortly.</p>
        <p className="text-xl text-gray-700">Go back to <Link className="text-blue-600" href="/">home</Link></p>
    </div>
  )
}

export default EmailSentPage;