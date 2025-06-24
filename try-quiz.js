console.log("JavaScriptが読み込まれました");
document.getElementById('quizForm').onsubmit = function(event) {
    event.preventDefault();

    const answers = {
        js1: "2",
        js2: "2",
        js3: "1",
        js4: "1",
        js5: "1",
        js6: "1",
        js7: "1",
        js8: "1", 
        js9: "1", 
        js10: "1",

        java1: "2",
        java2: "1",
        java3: "2",
        java4: "4",
        java5: "1",
        java6: "2",
        java7: "1",
        java8: "1",
        java9: "1",
        java10: "1"

    };

    const formData = new FormData(document.getElementById('quizForm'));
    let jsScore = 0, javaScore = 0, jsTotal = 10, javaTotal = 10;

  // ** 以前の結果をクリアする処理 **
    document.querySelectorAll('label').forEach(label => {
        label.classList.remove("correct", "incorrect");
    });

    // ** 正解・不正解の選択肢を色付けする処理 **
    for (let key in answers) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === answers[key]) {
                selectedOption.parentElement.classList.add("correct");
                if (key.startsWith("js")) jsScore++;
                else javaScore++;
            } else {
                selectedOption.parentElement.classList.add("incorrect");
            }
        }
    }



    const jsPercentage = (jsScore / jsTotal) * 100;
    const javaPercentage = (javaScore / javaTotal) * 100;

    const resultText = `JavaScriptの正解率: ${jsPercentage}% | Javaの正解率: ${javaPercentage}%`;

    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = resultText;
    resultDiv.style.display = 'block';
};
