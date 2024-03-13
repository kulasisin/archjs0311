// console.log("hello world!!!");
// let myName = "Kulas";
// console.log(myName);

// myName = "Isin";
// console.log(myName);

//我是註解

/*
我是一大段註解
我是一大段註解
我是一大段註解
容易出錯
*/
const dayjs = require("dayjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const timeQuestions = [
    "你最喜歡星期幾？",
    "現在是幾點？",
    "你什麼時候最有空？",
    "第一次喝酒是什麼時候？",
    "上次回家是什麼時候？",
    "你通常什麼時候吃早餐？",
    "上次去露營是時候？",
    "你計劃何時開始新的專案？",
    "你的生日是哪一天？",
    "你打算什麼時候去旅行？",
  ];
  const locQuestions = [
    "你住在哪裡？",
    "你最喜歡去哪裡放鬆？",
    "你的工作地點在哪裡？",
    "你最近去過哪些有趣的地方？",
    "你通常在哪裡購物？",
    "你想和朋友見面的地方是哪裡？",
    "你最喜歡的餐廳在哪裡？",
    "你最喜歡的度假勝地是哪裡？",
    "你最常去的休閒場所是哪裡？",
    "你最喜歡的城市是哪一個？",
  ];

  const adjQuestions = [
    "你最喜歡的顏色是什麼？",
    "你認為自己最大的優點是什麼？",
    "你的心情如何？",
    "你認為這個計劃有多重要？",
    "你最喜歡的季節如何？",
    "你認為英雄電影如何？",
    "你最近看到的風景如何？",
    "你想買的新衣服長怎麼樣？",
    "你認為這個問題困難嗎？",
    "你的理想工作怎麼樣？",
  ];

  const nounQuestions = [
    "你最喜歡的食物是什麼？",
    "你的工作內容是什麼？",
    "你最喜歡的運動是什麼？",
    "你想學習的新事物是什麼？",
    "你喜歡狗還是貓?",
    "你最近讀的一本書是什麼？",
    "你隨意朋友的綽號是什麼？",
    "你最喜歡的動物是什麼？",
    "你愛吃的夜市小吃是甚麼？",
    "你最喜歡的娛樂活動是什麼？",
  ];

  const advQuestions = [
    "你最近怎麼樣？",
    "你通常怎麼度過週末？",
    "你的工作進展如何？",
    "你今天早上起床時感覺如何？",
    "你通常如何處理壓力？",
    "你聽到鄰居夜晚吵鬧會多生氣？",
    "你最近多常運動？",
    "你跑得快還是慢？",
    "你多常思考未來？",
    "你多常在晚上看書？",
  ];
  //依序隨機抽五題

  const getQuest = (questions) => {
    let randomNum = parseInt(Math.random() * questions.length);
    return questions[randomNum];
  };

  //時間設置

  const getTime = () => {
    const now = dayjs();
    let time = {
      year: now.$y,
      month: now.$W,
      day: now.$D,
    };
    return time;
  };

  //依序發問

  while (true) {
    const time = getTime();
    let answers = {};
    answers.yourName = await question(
      `\n\n\n\n\n現在是${time.year}年${time.month}月${time.day}日，歡迎來到故事小舖，你的名字是甚麼呢？`
    );
    answers.yourTime = await question(getQuest(timeQuestions));
    answers.yourLoc = await question(getQuest(locQuestions));
    answers.yourNoun = await question(getQuest(nounQuestions));
    answers.yourAdj = await question(getQuest(adjQuestions));
    answers.yourAdv = await question(getQuest(advQuestions));

    console.log(`\n\n\n\n\n${answers.yourName}  你經歷了以下神秘事件...`);

    const storyTemplate = [
      `\n\n\n在一個  \x1b[1;31m${answers.yourAdj}\x1b[m  清晨，在某個  \x1b[1;33m${answers.yourLoc}\x1b[m  的角落，  \x1b[1;33m${answers.yourName}\x1b[m  靜靜地盯著遠方的動物。它的  \x1b[1;33m${answers.yourAdj}\x1b[m  眼睛閃爍著思考的光芒，而身邊的 \x1b[1;33m${answers.yourNoun}\x1b[m  伙伴則在  \x1b[1;33m${answers.yourAdv}\x1b[m  並輕快地跳躍著。這個 \x1b[1;33m${answers.yourNoun}\x1b[m 生物沐浴在 \x1b[1;33m${answers.yourAdj}\x1b[m 陽光下，享受著每一刻的寧靜。時間彷彿在這裡凝固，留下了一幅永恆的畫面。\n\n\n得意的一天過去了`,
      ` \x1b[1;33m${answers.yourName}\x1b[m 在一個炎熱的 \x1b[1;33m${answers.yourTime}\x1b[m ，發現在 \x1b[1;31m${answers.yourLoc}\x1b[m 中，突然出現了一座 \x1b[1;33m${answers.yourAdj}\x1b[m \x1b[1;33m${answers.yourNoun}\x1b[m 。 \x1b[1;33m${answers.yourNoun}\x1b[m 散發著陣陣涼意，而周圍的人們則在熱浪中 \x1b[1;33m${answers.yourAdv}\x1b[m 翻滾。 \x1b[1;33m${answers.yourName}\x1b[m 用力拍打 \x1b[1;33m${answers.yourNoun}\x1b[m 。這個離奇的 \x1b[1;33m${answers.yourAdj}\x1b[m 景象讓人們不禁驚嘆大自然的神奇，仿佛置身於一個奇幻的冰雪世界中，寒冷的一天過去了。\n\n\n`,
      `當 \x1b[1;33m${answers.yourTime}\x1b[m 降臨，在一個 \x1b[1;33m${answers.yourAdj}\x1b[m 的 \x1b[1;33m${answers.yourLoc}\x1b[m，有一家小餐館， \x1b[1;31m${answers.yourName}\x1b[m 靜靜地等待著 \x1b[1;33m${answers.yourNoun}\x1b[m 顧客的到來。它的招牌閃爍著迷人的燈光，而廚房裡的 \x1b[1;33m${answers.yourAdj}\x1b[m 廚師則在熱情地烹飪著。這個地方彷彿被 \x1b[1;33m${answers.yourName}\x1b[m 定格，讓 \x1b[1;33m${answers.yourNoun}\x1b[m 們可以 \x1b[1;33m${answers.yourAdv}\x1b[m 忘卻煩囂， \x1b[1;33m${answers.yourAdv}\x1b[m 專注享受 \x1b[1;33m${answers.yourNoun}\x1b[m 美食的美好時刻。\n\n\n美好的一天過去了`,
    ];

    const getStory = (storyTemplate) => {
      const randomNum = parseInt(Math.random() * storyTemplate.length);
      return storyTemplate[randomNum];
    };

    console.log(getStory(storyTemplate));
    const date = await question("現在是幾年幾月幾日呢?");
    if (date === `${time.year}年${time.month}月${time.day + 1}日`) {
      console.log(`次日，你在美好的清晨從床上醒來...`);
      break;
    } else {
      console.log(
        `\n\n\n\n\n \x1b[1;31m${answers.yourName}，你的答案錯誤！！時間之神懲罰你將永遠被困在同一天...\x1b[m`
      );
    }
  }
  rl.close();
}

main();
