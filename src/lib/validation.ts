const users: { name: string; birthday: string; nickname: string }[] = [
  {
    name: "Albert Chiang",
    birthday: "19861029",
    nickname: "Albert❤️",
  },
  {
    name: "CHU-EN HUANG(Skylar)",
    birthday: "20020126",
    nickname: "粉分❤️",
  },
  {
    name: "Freddy",
    birthday: "20020716",
    nickname: "Freddy❤️",
  },
  {
    name: "Slushie Hsu",
    birthday: "20010426",
    nickname: "雪泥❤️",
  },
  {
    name: "W",
    birthday: "20000624",
    nickname: "嚕嚕❤️",
  },
  {
    name: "YC",
    birthday: "19890831",
    nickname: "Joy❤️",
  },
  {
    name: "Zephyr 澤妃 童童 (湘蓉)",
    birthday: "20010211",
    nickname: "童童❤️",
  },
  {
    name: "光吉",
    birthday: "19850831",
    nickname: "大狗狗❤️",
  },
  {
    name: "琦 Kiki",
    birthday: "19961125",
    nickname: "琦琦❤️",
  },
  {
    name: "承軒🐑",
    birthday: "19990629",
    nickname: "軒軒❤️",
  },
  {
    name: "林祐弘",
    birthday: "20010603",
    nickname: "佑佑❤️",
  },
  {
    name: "盧胖胖",
    birthday: "19850219",
    nickname: "房客❤️",
  },
  {
    name: "詠舜",
    birthday: "19950304",
    nickname: "詠舜❤️",
  },
  {
    name: "黃奇多",
    birthday: "19870710",
    nickname: "多多❤️",
  },
  {
    name: "黃子育",
    birthday: "20010403",
    nickname: "Debby❤️",
  },
  {
    name: "凱立郭",
    birthday: "19890211",
    nickname: "立凱❤️",
  },
  {
    name: "Pei",
    birthday: "20000412",
    nickname: "Pei❤️",
  },
  {
    name: "趙幸華 Shivaun",
    birthday: "19921129",
    nickname: "阿華❤️",
  },
  {
    name: "神神😇",
    birthday: "19951010",
    nickname: "神神❤️",
  },
];

export const validateUser = (
  username: string,
  birthday: string
): boolean | { name: string; birthday: string; nickname: string } => {
  const user = users.find(
    (user) => user.name === username && user.birthday === birthday
  );
  if (!user) {
    return false;
  }
  return user;
};
