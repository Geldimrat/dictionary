import { words } from "./words.js";


let entered_word = document.getElementById('entered_word');
let search_btn = document.getElementById('search_btn');
let words_container = document.getElementById('words')
let add_word_btn = document.getElementById('add_word_btn')
let words_text = ''

for (let i = 3; i < 8; i++) {
    words_text += `
        <div class="translated_word">
            <div class="word_info">
                <p class="name">English</p>
                <p class="word">${words[i].en}</p>
            </div>
            <div class="word_info">
                <p class="name">Spanish</p>
                <p class="word">${words[i].sp}</p>
            </div>
            <div class="word_info">
                <p class="name">Example</p>
                <p class="word">${words[i].ex}</p>
            </div>
        </div>
    `
}

words_container.innerHTML = words_text;


function find_word_fn() {
    let found_word = '';
    if (entered_word.value !== '' && entered_word.value !== ' ') {
        found_word = words.filter(item => item.en.toUpperCase().includes(entered_word.value.toUpperCase()) || item.sp.toUpperCase().includes(entered_word.value.toUpperCase()))
    }

    words_text = ''

    found_word.forEach(e => {
        words_text += `
            <div class="translated_word">
                <div class="word_info">
                    <p class="name">English</p>
                    <p class="word">${e.en}</p>
                </div>
                <div class="word_info">
                    <p class="name">Spanish</p>
                    <p class="word">${e.sp}</p>
                </div>
                <div class="word_info">
                    <p class="name">Example</p>
                    <p class="word">${e.ex}</p>
                </div>
            </div>
        `
    })

    words_container.innerHTML = words_text;
}


function show_all_words() {

    words_text = ''
    entered_word.value = ''

    function func(object1, object2) {
        if (object1.en < object2.en)
            return -1;
        if (object1.en > object2.en)
            return 1;
        return 0;
    }

    words.sort(func)

    words.forEach(e => {
        words_text += `
            <div class="translated_word">
                <div class="word_info">
                    <p class="name">English</p>
                    <p class="word">${e.en}</p>
                </div>
                <div class="word_info">
                    <p class="name">Spanish</p>
                    <p class="word">${e.sp}</p>
                </div>
                <div class="word_info">
                    <p class="name">Example</p>
                    <p class="word">${e.ex}</p>
                </div>
            </div>
        `
    })

    words_container.innerHTML = words_text
}


add_word_btn.addEventListener('click', show_all_words)
search_btn.addEventListener('click', find_word_fn)
entered_word.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        find_word_fn();
    }
})

