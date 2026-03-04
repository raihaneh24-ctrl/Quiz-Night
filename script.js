const questions = [
    {question:"1. Which country does NOT share a border with Afghanistan?",options:["Pakistan","Iran","India","China"],correct:3},
    {question:"2. Which sport is considered the national sport of Afghanistan?",options:["Cricket","Football","Buzkashi","Basketball"],correct:2},
    {question:"3. Who wrote Romeo and Juliet?",options:["Charles Dickens","William Wordsworth","William Shakespeare","Jane Austen"],correct:2},
    {question:"4. Which of the following is a verb?",options:["Run","Quickly","Beautiful","Happiness"],correct:0},
    {question:"5. Which two languages are official in Afghanistan?",options:["Pashto and Urdu","Dari and Pashto","Pashto and Dari","b & c"],correct:3},
    {question:"6. Who is a famous Afghan poet and philosopher born in Balkh?",options:["Khushal Khan Khattak","Ahmad Shah Durrani","Jalal ad-Din Rumi","Rahman Baba"],correct:2},
    {question:"7. What is the name of the Victory Afghanistan newsletter?",options:["Darya","Barya","Victory","Success"],correct:1},
    {question:"8. Rabia Balkhi is known as:",options:["A modern Afghan singer","The first female poet in Persian literature","A queen of Afghanistan","A military leader"],correct:1},
    {question:"9. How many bones does an adult human body have?",options:["106","306","206","406"],correct:2},
    {question:"10. What does 'AI' stand for?",options:["Automated Internet","Artificial Intelligence","Advanced Information","Automatic Input"],correct:1},
    {question:"11. Which language is primarily spoken in Brazil?",options:["Spanish","French","Portuguese","English"],correct:2},
    {question:"12. Which Afghan poet is known for his Pashto Sufi poetry?",options:["Rahman Baba","Mirwais","Babur","Ahmad Shah Baba"],correct:0},
    {question:"13. Which Afghan king declared independence from Britain in 1919?",options:["Habibullah Khan","Amanullah Khan","Nadir Shah","Sher Ali Khan"],correct:1},
    {question:"14. Which Afghan leader was known as the 'Iron Amir'?",options:["Dost Mohammad Khan","Amanullah Khan","Abdur Rahman Khan","Ahmad Shah Baba"],correct:2},
    {question:"15. Who was a famous Afghan female poet and activist?",options:["Malalai of Maiwand","Rabia Balkhi","Nadia Anjuman","All of the above"],correct:3},
    {question:"16. Who developed the theory of relativity?",options:["Albert Einstein","Isaac Newton","Galileo Galilei","Nikola Tesla"],correct:0},
    {question:"17. What is the chemical symbol for Gold?",options:["Ag","Au","Gd","Go"],correct:1},
    {question:"18. Malalai of Maiwand is famous for her role in which war?",options:["First Anglo-Afghan War","Second Anglo-Afghan War","Third Anglo-Afghan War","Soviet-Afghan War"],correct:1},
    {question:"19. Fawzia Koofi is known for her work as a:",options:["Athlete","Teacher","Politician and women's rights activist","Actress"],correct:2},
    {question:"20. If you could choose one Afghan woman who broke barriers and made history on the world stage, who would she most likely be?",options:[
    "A woman who built Afghanistan’s first tech company for girls",
    "A woman who became a powerful political voice for women’s rights",
    "A young leader who became a mayor despite serious threats",
    "All of the above"],correct:3}
    ];
    
    let currentQuestion = 0;
    let timer;
    let timeLeft = 90; // 1.5 minutes
    
    function loadQuestion(){
    clearInterval(timer);
    timeLeft = 90;
    
    const q = questions[currentQuestion];
    if(currentQuestion === questions.length - 1){
        document.getElementById("question").innerHTML =
        "🥇 GOLDEN QUESTION 🥇<br><br>" + q.question;
        
        document.body.classList.add("golden-mode");
        }else{
        document.body.classList.remove("golden-mode");
        }
    document.getElementById("question").innerText = q.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach((option,index)=>{
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    
    div.onclick = ()=>{
    highlightAnswer(index, q.correct);
    };
    
    optionsDiv.appendChild(div);
    });
    
    startTimer();
    }
    
    function highlightAnswer(selected, correct){
    const optionsDiv = document.getElementById("options");
    
    for(let i=0;i<optionsDiv.children.length;i++){
    if(i === correct){
    optionsDiv.children[i].classList.add("correct");
    }
    if(i === selected && selected !== correct){
    optionsDiv.children[i].classList.add("wrong");
    }
    }
    
    clearInterval(timer);
    }
    
    function startTimer(){
    document.getElementById("timer").innerText = "Time: 1:30";
    
    timer = setInterval(()=>{
    timeLeft--;
    
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    if(seconds < 10) seconds = "0" + seconds;
    
    document.getElementById("timer").innerText =
    "Time: " + minutes + ":" + seconds;
    
    if(timeLeft <= 0){
    clearInterval(timer);
    nextQuestion();
    }
    
    },1000);
    }
    
    function nextQuestion(){
    if(currentQuestion < questions.length-1){
    currentQuestion++;
    loadQuestion();
    }else{
    window.location.href="winner.html";
    }
    }
    
    function prevQuestion(){
    if(currentQuestion > 0){
    currentQuestion--;
    loadQuestion();
    }
    }
    
    if(document.getElementById("question")){
    loadQuestion();
    }