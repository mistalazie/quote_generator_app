const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "I failed my way to success.", author: "Thomas Edison" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Some people dream of success while others wake up and work.", author: "Unknown" },
    { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.", author: "Conrad Hilton" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.", author: "Zig Ziglar" },
    { text: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden" },
    { text: "Don't be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { text: "No matter how hard the past, you can always begin again.", author: "Buddha" },
    { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" }
];



function handleClick () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").innerHTML = randomQuote.text
    document.getElementById("citation").innerHTML = randomQuote.author
}

