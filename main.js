const input = document.querySelector('.input')
const button = document.querySelector('.add')
const list = document.querySelector('.list')



button.addEventListener('click', renderItem)


function renderItem() {
    const title = input.value
    const item  = `<li class="list__item" data-id="${new Date().getTime()}">
    <div class="list__itemBlock">
        <p class="paragraf">${title}</p>
        <button class="btn delete">&#128722</button>
    </div>
</li>`

list.insertAdjacentHTML('afterbegin', item)

    const btnDelete = document.querySelector('.delete')
    btnDelete.addEventListener('click', function() {
        console.log(this.parentNode.parentNode.dataset.id);
        const id = this.parentNode.parentNode.dataset.id

        delete2(id)
    })
}

function delete2(id) {
    const li = document.querySelectorAll('li')
    li.forEach(el => el.dataset.id === id && el.remove())
}

// function lists() {
//     let li = document.querySelector('.listItem')


//     list.insertAdjacentElement('afterbegin', li)
// }

// lists()