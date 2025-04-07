// function useLightTheme() {
//   document.body.style.color = '#212529'
//   document.body.style.backgroundColor = '#f1f5f9'

// }

function useLightTheme() {
  document.body.classList.remove('is-dark')
  document.body.classList.add('is-light')

}

// function useDarkTheme() {
//   document.body.style.color = '#f1f5f9'
//   document.body.style.backgroundColor = '#212529'
// }

function useDarkTheme() {
  document.body.classList.remove('is-light')
  document.body.classList.add('is-dark')
}


function switchTheme() {
  document.body.classList.toggle('is-dark')
  document.body.classList.toggle('is-light')
}
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)