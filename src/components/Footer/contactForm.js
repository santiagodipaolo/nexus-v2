export default function Contact() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "06d5d0b6-c4d7-4427-b620-12d36c7457b4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <>
        <form className="w-full max-w-sm xs:mb-5" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full lg:flex-row">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input name="email" id="email" type="email" placeholder="Email Address" className="block w-full h-12 px-5 py-3 duration-200 text-white bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" />
                <button type="submit" aria-label="Primary action" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 text-sm text-white duration-200 bg-green-500 md:w-auto hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    SUBMIT
                </button>
            </div>
        </form>
    </>
  );
}