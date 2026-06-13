function checkSecretWord() {
    let word = document.getElementById('word-input').value.trim().toUpperCase();
    let output = document.getElementById('crypto-output');

    if (word === "КОНСТИТУЦИЯ") {
        output.innerHTML = "<span class='success'>✔ Поздравляем! Расшифровка успешна. Именно это слово заговорщики шифровали чаще всего. Николай I на следствии поражался, что под Конституцией многие солдаты понимали имя жены цесаревича Константина.</span>";
    } else {
        output.innerHTML = "<span style='color: #8c2727;'>❌ Слово не совпадает с кодом цифирной азбуки. Попробуйте еще раз.</span>";
    }
}
function handleFork(option) {
    let outcome = document.getElementById('fork-outcome');
    if (option === 1) {
        outcome.innerHTML = "<strong>Ваш выбор: искать Трубецкого.</strong> Каноничный сценарий: Трубецкий так и не найден, инициатива полностью перешла к правительственным войскам Николая I.";
    } else {
        outcome.innerHTML = "<strong>Ваш выбор: Атаковать Зимний Дворец.</strong> Альтернативный сценарий: в действительности - декабристы решились на смену диктатора (выбрали Оболенского) слишком поздно - только к 15:00, когда артиллерия Николая I уже окружила площадь. Возможно, если бы главный герой выбрал этот же сценарий, история могла бы быть совершенно иной.";
    }
    document.getElementById('fork-zone').style.display = 'none';
    document.getElementById('hidden-story').style.display = 'block';
}

