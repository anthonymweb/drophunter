import axios from "axios";

export async function send(msg) {
  const url =
`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: process.env.CHAT_ID,
    text: msg,
    parse_mode: "HTML"
  });
}

export async function sendMarkdown(msg) {
  const url =
`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: process.env.CHAT_ID,
      text: msg,
      parse_mode: "Markdown"
    });
}