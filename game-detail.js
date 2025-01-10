document.addEventListener('DOMContentLoaded', () => {
    // Get game slug from URL
    const gameSlug = window.location.pathname.split('/game/')[1];
    
    // Find the game data
    const game = games.find(g => g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gameSlug);
    
    if (game) {
        // Update page title and meta description
        document.title = `${game.title} - Cozy Game Directory`;
        document.querySelector('meta[name="description"]').content = 
            `Learn more about ${game.title} - ${game.description}`;
        
        // Update page content
        document.querySelector('.game-title').textContent = game.title;
        document.querySelector('.game-category').textContent = game.category;
        document.querySelector('.game-hero-image').src = game.imageUrl;
        document.querySelector('.game-hero-image').alt = game.title;
        document.querySelector('.game-description p').textContent = game.description;
        
        // Find similar games (same category)
        const similarGames = games
            .filter(g => g.category === game.category && g.title !== game.title)
            .slice(0, 3);
            
        // Populate similar games
        const similarGamesContainer = document.querySelector('.similar-games .game-grid');
        similarGames.forEach(similarGame => {
            similarGamesContainer.appendChild(createGameCard(similarGame));
        });
    } else {
        // Handle 404 - game not found
        window.location.href = '/404.html';
    }
}); 