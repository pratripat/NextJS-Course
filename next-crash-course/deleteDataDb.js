const sql = require('better-sqlite3');
const readline = require('readline');

const db = sql('meals.db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Function to handle the database deletion
function deleteMeal(slug) {
    try {
        const stmt = db.prepare('DELETE FROM meals WHERE slug = ?');
        const info = stmt.run(slug);

        if (info.changes > 0) {
            console.log(`✅ Successfully deleted meal with slug: ${slug}`);
        } else {
            console.log(`⚠️ No meal found with slug: ${slug}. Nothing was deleted.`);
        }
    } catch (error) {
        console.error('❌ Database error during deletion:', error.message);
    } finally {
        // You might want to close the database connection here if this is the end of the script
        db.close(); 
    }
}

rl.question('Enter the slug of the meal you want to be deleted', (answer) => {
    const slugToBeDeleted = answer.trim();

    if (slugToBeDeleted) {
        deleteMeal(slugToBeDeleted);
    } else {
        console.log('no slug entered');
    }

    rl.close();
})