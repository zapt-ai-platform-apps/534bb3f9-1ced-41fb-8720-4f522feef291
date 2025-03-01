/**
 * @typedef {Object} Fortune
 * @property {string} message The fortune message text
 */

const fortunes = [
  "A journey of a thousand miles begins with a single step.",
  "Your greatest strength is your ability to adapt.",
  "A smile is your passport into the hearts of others.",
  "The best way to predict your future is to create it.",
  "Good things come to those who wait, but better things come to those who work for it.",
  "Happiness is not a destination, but a way of life.",
  "Be not afraid of growing slowly, be afraid only of standing still.",
  "Your mind is your greatest tool. Keep it sharp.",
  "A problem is a chance for you to do your best.",
  "The wisest person is the one who knows they know nothing.",
  "Small opportunities are often the beginning of great achievements.",
  "You will find unexpected treasures where you least expect them.",
  "The path to success is to take massive, determined actions.",
  "Every ending is a new beginning. Don't fear change.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Patience is bitter, but its fruit is sweet.",
  "Listen to your intuition; it will rarely mislead you.",
  "The only real limitation is the one you set for yourself.",
  "Your creativity will shine in the coming days.",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
  "Don't wait for opportunity. Create it.",
  "Courage is not the absence of fear, but the triumph over it.",
  "Your kindness will lead you to unexpected places.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Trust the process. Your time is coming.",
  "The greatest risk is not taking one.",
  "What lies behind you and what lies before you are tiny matters compared to what lies within you.",
  "Your potential is endless. Go do what you were created to do.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "In the middle of difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "The darkest night produces the brightest stars.",
  "Be the change you wish to see in the world.",
  "Every accomplishment starts with the decision to try.",
  "You are never too old to set another goal or to dream a new dream.",
  "The secret of getting ahead is getting started.",
  "The best view comes after the hardest climb.",
  "Life's too short to learn from your own mistakes. Learn from others.",
  "Don't count the days, make the days count.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

/**
 * Generates a random fortune message
 * @returns {Fortune} A fortune object with a message
 */
export function generateFortune(): { message: string } {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return { message: fortunes[randomIndex] };
}