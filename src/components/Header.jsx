function Header({ timePhase }) {
  const greetings = {
    morning: "Good morning ☀️ Start fresh.",
    afternoon: "Good afternoon 💻 Stay focused.",
    evening: "Good evening 🌆 Unwind a little.",
    night: "Good night 🌙 Rest well."
  };

  return (
    <>
      <h1>ChronoSense</h1>
      <p>{greetings[timePhase]}</p>
    </>
  );
}

export default Header;
