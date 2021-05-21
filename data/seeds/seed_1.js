exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "Recording Equipment",
      resource_description: "For making the movie",
    },
    { resource_name: "Explosives", resource_description: "To save the world" },
    { resource_name: "Flawed understanding of the global financial System" },
    {
      resource_name: "Hollywood-Accurate Identity Disorder",
      resource_description: "Doesn't really work like this",
    },
    { resource_name: "Robert Paulson" },
    {
      resource_name: "Appreciation for Life",
      resource_description: "It is all important, one way or another",
    },
    {
      resource_name: "Empathy",
      resource_description: "There is more to life than the self",
    },
    {
      resource_name: "The Moment",
      resource_description:
        "Appreciate it, Love it, Don't let it slip, but Don't let it go",
    },
    {
      resource_name: "Friend(s)",
      resource_description: "Hopefully golden, not gilded",
    },
    { resource_name: "Love" },
  ]);
};
