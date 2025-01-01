// let random = Math.random();

// if (random < 0.5) {
//     console.log("0.5より小さい");
//     console.log(random);
// }

// if (random > 0.5) {
//     console.log("0.5より大きい");
//     console.log(random);
// }

// const dayOfWeek = prompt('英語で曜日を入力して下さい').toLocaleLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('憂鬱');
// } else {
//     console.log('最高');
// }

// const password = prompt('パスワードを入力してください');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('素晴らしい');
// } else {
//     console.log('無効');
// }

// let username = prompt('ユーザー名を入力して下さい:');

// if (!username) {
//     let username = prompt('正確に入力してください：');
// }

// const day = 7;

// switch (day) {
//     case 1:
//         console.log('月曜日');
//         break;
//     case 2:
//         console.log('火曜日');
//         break;
//     case 3:
//         console.log('水曜日');
//         break;
//     case 4:
//         console.log('木曜日');
//         break;
//     case 5:
//         console.log('金曜日');
//         break;
//     default:
//         console.log('無効な数字です');
// }

// let colors = ['red', 'blue'];
// colors[10] = 'yellow';
// console.log(colors);

// let movieLine = ['yamada', 'tanaka'];
// movieLine.push('sato');
// movieLine.push('watanabe', 'hasegawa');
// let person = movieLine.pop().toUpperCase();

// let topPerson = movieLine.shift();
// movieLine.unshift('Andy');

// let maximum = parseInt(prompt('数字を入力してください'));
// while (!maximum) {
//     maximum = parseInt(prompt('有効な数字を入力してください'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let count = 1;
// let guess = parseInt(prompt('数字を当ててください'));
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     count++;
//     if (guess > targetNum) {
//         guess = prompt('大きいです。もう一度数字を入力してください');
//     }
//     if (guess < targetNum) {
//         guess = prompt('小さいです。もう一度数字を入力してください');
//     }
// }
// if (guess === 'q') {
//     console.log('終了');
// } else {
//     console.log(`正解! ${count}回目`);
// }

const lists = [];
let guess = prompt('コマンドを入力して下さい(new, list, delete, quit)');
while (true) {
    if (guess === 'quit') {
        console.log('終了します');
        break;
    } else if (guess == 'new') {
        let newList = prompt('新しいTodoを入力してください')
        lists.push(newList);
        console.log('Todoを追加しました');
    } else if (guess == 'list') {
        console.log('*****************');
        for (let i = 0; i < lists.length; i++) {
            console.log(`${i}：　${lists[i]}`);
        }
        console.log('*****************');
    } else if (guess === 'delete') {
        let deleteIndex = prompt('削除するTodoのインデックスを入力してください');
        let deleteList = lists.splice(deleteIndex, 1);
        console.log(`${deleteIndex +}番目の ${deleteList}を削除しました`);
    }
    guess = prompt('コマンドを入力して下さい(new, list, delete, quit)');
}
