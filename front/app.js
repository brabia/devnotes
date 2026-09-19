async function loadCars() {
  const container = document.getElementById('cars');
  try {
    const response = await fetch('/api/cars.php');
    if (!response.ok) throw new Error('API error');
    const cars = await response.json();
    container.innerHTML = cars.map(car => `
      <article class="card">
        <img src="${car.image_url}" alt="${car.brand} ${car.model}">
        <div class="content">
          <h2>${car.brand} ${car.model}</h2>
          <p>${car.year} · ${car.available ? 'Available' : 'Unavailable'}</p>
          <strong>€${Number(car.price_per_day).toFixed(2)} / day</strong>
        </div>
      </article>
    `).join('');
  } catch (error) {
    container.innerHTML = '<p>Unable to load cars.</p>';
    console.error(error);
  }
}
loadCars();
