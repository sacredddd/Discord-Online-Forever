const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.MTIxOTQwNjA5MzkwMjU0NDg5Nw.GCV2V9.G8rNLv9GaQV4b8BwmIkGRdXZ6BK1MKF-cB2W8c);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
