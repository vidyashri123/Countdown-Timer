function startCountdown() {
    const inputDateTime = new Date(document.getElementById('datetime').value).getTime();
    
    if (isNaN(inputDateTime)) {
        alert("Please select a valid date and time.");
        return;
    }

    setInterval(function() {
        const currentTime = new Date().getTime();
        const timeDifference = inputDateTime - currentTime;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `
                ${days}d ${hours}h ${minutes}m ${seconds}s remaining
            `;
        } else {
            document.getElementById('countdown').innerHTML = "Countdown expired!";
        }
    }, 1000);
}
