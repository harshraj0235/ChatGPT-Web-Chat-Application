function getAnswer() {
    const questionInput = document.getElementById('questionInput').value;
    if (!questionInput) {
        alert('Please enter a question.');
        return;
    }

    // Make a request to DuckDuckGo Instant Answer API
    fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(questionInput)}&format=json`)
        .then(response => response.json())
        .then(data => {
            const answerElement = document.getElementById('answer');
            if (data.AbstractText) {
                answerElement.textContent = data.AbstractText;
            } else {
                answerElement.textContent = 'No answer found.';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
