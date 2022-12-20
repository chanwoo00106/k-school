const axios = require("axios");

const send = async () => {
  try {
    const { data } = await axios.post(
      "https://port-0-kschool-backend-37y7e24l7jiwra5.gksl1.cloudtype.app/pop/?count=99&token=&schoolCode=7380292"
    );
    console.log(`total: ${data.total}, pop: ${data.pop}, rank: ${data.rank}`);
    console.log(`token: ${data.token}`);
  } catch (e) {
    console.log(e?.response?.data?.msg);
  }
};

const init = async () => {
  while (true) {
    await send();
  }
};

init();
