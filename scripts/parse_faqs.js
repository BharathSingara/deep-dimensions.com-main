const fs = require('fs');
const path = require('path');

const rawPath = path.join(__dirname, '../src/data/raw_faqs.txt');
const outPath = path.join(__dirname, '../src/data/faqs.json');

const raw = fs.readFileSync(rawPath, 'utf-8');
const lines = raw.split(/\r?\n/);

const categories = [];
let currentCategory = null;
let currentQuestion = null;

// Regex patterns
const categoryStartRegex = /^Category \d+ of \d+: (.+) \(\d+ Questions\)/;
const questionRegex = /^(\d+)\.\s+(.+)/;
const separatorRegex = /^_+$/;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (!line) continue;
    if (separatorRegex.test(line)) continue;
    if (line.startsWith('Deep Dimensions FAQ Library')) continue;

    // Check for Category Start
    const catMatch = line.match(categoryStartRegex);
    if (catMatch) {
        currentCategory = {
            name: catMatch[1].trim(),
            questions: []
        };
        categories.push(currentCategory);
        currentQuestion = null;
        continue;
    }

    // Check for Question
    const qMatch = line.match(questionRegex);
    if (qMatch) {
        if (currentCategory) {
            // Generate a unique ID based on category index and question index, or just a global UUID/counter
            // We'll use a simple combination of category name (sanitized) and the question number, 
            // plus a random string to be safe, OR just a global counter if we want to be simple.
            // Let's use a global counter for absolute uniqueness.
            const uniqueId = `faq-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            currentQuestion = {
                id: uniqueId,
                question: qMatch[2].trim(),
                answer: ''
            };
            currentCategory.questions.push(currentQuestion);
        }
        continue;
    }

    // Append to Answer
    if (currentQuestion) {
        // If it looks like a subheader (short, no punctuation at end, maybe?), treat as text for now or ignore?
        // Actually, the subheaders like "Company Overview & Identity" appear before questions.
        // If we are inside a question, this line is part of the answer.
        // If we are NOT inside a question (between category start and first question), it might be a subheader.
        // But for simplicity, we'll just append to answer if we have a question.
        // If we don't have a question yet, we ignore it (it's likely a subheader).

        // Wait, if it's a subheader, it might be useful.
        // But the user just wants the FAQs.
        // Let's just append to answer.
        currentQuestion.answer += (currentQuestion.answer ? ' ' : '') + line;
    }
}

fs.writeFileSync(outPath, JSON.stringify(categories, null, 2));
console.log(`Parsed ${categories.length} categories and ${categories.reduce((acc, c) => acc + c.questions.length, 0)} questions.`);
