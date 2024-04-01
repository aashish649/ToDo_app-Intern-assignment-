const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];

  let today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`;

  let greeting = "";

  if (hours > 0 && hours < 12) {
    greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return (
    <div className="text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold"> {"To-Do-App{</>}"}</h1>{" "}
          {/* Increased font size */}
        </div>
        <div className="text-left">
          <div className="text-sm">{greeting}</div>
          <div className="text-sm">{today}</div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
