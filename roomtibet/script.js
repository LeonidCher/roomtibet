const arrowsDown = document.querySelectorAll('.info__icon')
const selectBlocks = document.querySelectorAll('.info__selectCategory')
arrowsDown.forEach((el) => {
    el.addEventListener('click', (el)=>{
        console.log(el)
        selectBlocks.forEach((el)=>{
            el.classList.toggle('info__selectCategory_active')
        })
    })
})
// const arrowsDown = document.querySelectorAll('.info__icon')
// const selectBlocks = document.querySelectorAll('.info__selectCategory')
// for (let i = 0; i < arrowsDown.length; i++) {
//     arrowsDown[i].addEventListener('click', (el) => {
//         for (let a = 0; a < selectBlocks.length; a++) {
//             selectBlocks[a].classList.toggle('info__selectCategory_active')
//         }
//     })
// }