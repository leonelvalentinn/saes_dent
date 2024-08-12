const modales = []
const show = []
const closeModal = []

for (let i = 1; i <= 4; i++) {
  modales[i] = document.getElementById('modal' + i)
  show[i] = document.getElementById('caso' + i);
  closeModal[i] = document.getElementById('close' + i);
  show[i].addEventListener('click', () => {
    modales[i].classList.add('show')
  })
  closeModal[i].addEventListener('click', () => {
    modales[i].classList.remove('show')
  })
  modales[i].addEventListener('click', () => {
    modales[i].classList.remove('show')
  })
}
