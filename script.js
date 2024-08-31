document.addEventListener('DOMContentLoaded', () => {
    const catPicsUrl = 'https://api.thecatapi.com/v1/images/search?limit=3';

    const fetchCatPics = async () => {
        try {
            const response = await fetch(catPicsUrl);
            const data = await response.json();
            displayCatPics(data);
        } catch (error) {
            console.error('Error fetching cat pictures:', error);
        }
    };

    const displayCatPics = (catPics) => {
        const apiData = document.getElementById('api-data');
        catPics.forEach(catPic => {
            const catCol = document.createElement('div');
            catCol.className = 'col-md-4';
            catCol.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Cat Picture</h5>
                        <img src="${catPic.url}" class="img-fluid" alt="Random Cat">
                    </div>
                </div>
            `;
            apiData.appendChild(catCol);
        });
    };

    fetchCatPics();
});
