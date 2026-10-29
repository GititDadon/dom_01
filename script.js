// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
//  <section class="panel preview">
    //   <article id="card" class="card">
    //     <div id="avatar" class="avatar">?</div>
    //     <h3 id="card-name">Your name</h3>
    //     <p id="card-job">Your job title</p>
    //     <p id="card-email">your@email.com</p>
    //     <p id="card-bio">Your bio will appear here.</p>
    //   </article>
const nameInput=document.getElementById('name-input')
const jobInput=document.getElementById('job-input')
const emailInput=document.getElementById('email-input')
const bioInput=document.getElementById('bio-input')
const cardName=document.getElementById('card-name')
const cardJob=document.getElementById('card-job')
const cardBio=document.getElementById('card-bio')
const cardEmail=document.getElementById('card-email')
const avatar=document.getElementById('avatar')
const counter = document.querySelector('.counter');
const form = document.getElementById('card-form');
const bioLeft = document.getElementById('bio-left');

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    cardName.textContent = name || 'Your name';
    avatar.textContent = name.charAt(0).toUpperCase() || '?';
});
jobInput.addEventListener('input',()=>{;
    cardJob.textContent=jobInput.value.trim() || 'Your job title'
})
emailInput.addEventListener('input',()=>{;
    cardEmail.textContent=emailInput.value.trim() || 'your@email.com'
})

bioInput.addEventListener('input',()=>{;


const remaining = 80 - bioInput.value.length;

    cardBio.textContent =
        bioInput.value.trim() || 'Your bio will appear here.';

    bioLeft.textContent = remaining;

    counter.classList.toggle('warning', remaining <= 10);
})

//  <label>Accent color
//         <select id="color-select">
//           <option value="#4f46e5">Indigo</option>
//           <option value="#059669">Green</option>
//           <option value="#dc2626">Red</option>
//         </select>
//       </label>

const colorSelect=document.querySelector('#color-select')
const card=document.querySelector('#card')

colorSelect.addEventListener('change',()=>{
    card.style.borderColor=colorSelect.value
    avatar.style.backgroundColor=colorSelect.value
})

//  <div class="buttons">
//         <button type="button" id="theme-btn">Dark mode</button>
//         <button type="button" id="reset-btn">Reset</button>
//       </div>
const dark=document.getElementById('theme-btn')
const reset=document.getElementById('reset-btn')

dark.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    dark.textContent = isDark ? 'Light mode' : 'Dark mode';
});
reset.addEventListener('click', () => {
    form.reset();

    cardName.textContent = 'Your name';
    cardJob.textContent = 'Your job title';
    cardEmail.textContent = 'your@email.com';
    cardBio.textContent = 'Your bio will appear here.';

    avatar.textContent = '?';

    bioLeft.textContent = '80';
    counter.classList.remove('warning');

    card.style.borderColor = '#4f46e5';
    avatar.style.backgroundColor = '#4f46e5';

    document.body.classList.remove('dark');
    dark.textContent = 'Dark mode';
});