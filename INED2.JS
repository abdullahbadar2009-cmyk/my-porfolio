game.addEventListener("click", () => {
    const num = parseInt(inpu.value);

    // check number between 1 and 20
    if (!num || num < 1 || num > 20) {
        alert("Enter a number between 1 and 20!");
        return;
    }

    // show number
    output.innerHTML = `You chose: ${num}`;

    // random win or lose
    if (Math.random() > 0.1) {
        output.innerHTML += "<br>You got it right! 🎉";
    } else {
        output.innerHTML += "<br>Damn! Try again 😢";
    }
});


    


