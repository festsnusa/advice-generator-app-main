let title = document.querySelector('.header__title'),
  text = document.querySelector('.main__text'),
  dice = document.querySelector('.footer__dice')

async function updateComponent() {

  const response = await fetch(`https://api.adviceslip.com/advice`)
  const result = await response.text()

  let obj = JSON.parse(result)
  title.innerHTML = `advice #${obj.slip.id}`
  text.innerHTML = `"${obj.slip.advice}"`

}

dice.addEventListener('click', () => {
  setTimeout(() => {
    updateComponent()
  }, "2000")
})
window.addEventListener('DOMContentLoaded', updateComponent)