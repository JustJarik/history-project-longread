function checkHexKey() {
    let input = document.getElementById('hex-input').value.replace(/\s+/g, '').toUpperCase();
    let correctHex = "D0A0D18BD0BBD0B5D0B5D0B2D181D0BAD0B0D18F";
    let output = document.getElementById('crypto-output');

    if (input === correctHex) {
        document.getElementById('crypto-step-1').style.display = 'none';
        document.getElementById('crypto-step-2').style.display = 'block';
        output.innerText = "";
    } else {
        output.innerHTML = "<span style='color: #8c2727;'>❌ Ключ не подходит. Матрица сдвига не нейтрализована. Проверьте символы.</span>";
    }
}

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
        outcome.innerHTML = "<strong>Ваш выбор: искать Трубецкого.</strong> Время упущено, Трубецкой так и не найден, инициатива полностью перешла к правительственным войскам Николая I.";
    } else {
        outcome.innerHTML = "<strong>Ваш выбор: Атаковать Зимний.</strong> Альтернативный сценарий не удался: декабристы решились на смену диктатора (выбрали Оболенского) слишком поздно — только к 15:00, когда артиллерия Николая I уже окружила площадь.";
    }
    document.getElementById('fork-zone').style.display = 'none';
    document.getElementById('hidden-story').style.display = 'block';
}

