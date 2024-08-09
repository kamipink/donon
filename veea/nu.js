function checkStock(url, adGroupName) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the stock information received in `data`
            console.log(`Stock information for ${adGroupName}:`, data);
            // Example: Displaying stock status
            if (data.inStock) {
                console.log(`Product in stock for ${adGroupName}`);
            } else {
                console.log(`Product out of stock for ${adGroupName}`);
            }
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
}
