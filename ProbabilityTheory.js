function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) { 
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    console.log(count);
    console.log(evenCount);
    console.log(oddCount);
    console.log(evenPercent.toFixed(2) + "% / " + oddPercent.toFixed(2) + "%");
}

checkProbabilityTheory(1000);