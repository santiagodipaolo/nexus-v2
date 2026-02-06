const Team = () => {
  const team = [
    {
      name: "Shaan Patel",
      role: "Co-Founder & CEO",
      initials: "SP",
      linkedin: "https://www.linkedin.com/in/shaanpatel/"
    },
    {
      name: "Santiago Di Paolo",
      role: "Co-Founder & Board Member",
      initials: "SD",
      linkedin: "https://www.linkedin.com/in/santiagodipaolo/"
    }
  ]

  return (
    <div id="team" className="flex flex-col justify-center items-center py-20 bg-[#f5ede5] w-full">
      <h1 className="font-semibold text-black text-3xl text-center mb-4">
        Meet the <span className="title-gradient-underline">Team</span>
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl px-4">
        The people behind Nexus, dedicated to connecting top Latin American talent with US companies.
      </p>
      <div className="flex flex-wrap justify-center gap-16 px-4">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border-4 border-white shadow-xl mb-4">
              <span className="text-white text-4xl font-bold">{member.initials}</span>
            </div>
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              LinkedIn →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
