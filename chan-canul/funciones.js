const num1 = document.querySelector("#numero1")
const num2 = document.querySelector("#numero2")
const num3 = document.querySelector("#numero3")
const num4 = document.querySelector("#numero4")
const num5 = document.querySelector("#numero5")
const num6 = document.querySelector("#numero6")
const num7 = document.querySelector("#numero7")
const num8 = document.querySelector("#numero8")
const num9 = document.querySelector("#numero9")
const num10 = document.querySelector("#numero10")
const num11 = document.querySelector("#numero11")
const num12 = document.querySelector("#numero12")





const resultado = document.querySelector("#resultado")
const resultado2 = document.querySelector("#resultado2")
const resultado3 = document.querySelector("#resultado3")



const botonTareas = document.querySelector("#Promediotareas")
const botonejercicios = document.querySelector("#Promedioejercicios")
const botonexamen = document.querySelector("#Promedioexamen")

botonTareas.addEventListener("click", () => {
    const res = promedio(num1.value, num2.value, num3.value, num4.value, num5.value);
    resultado.textContent = res
})  

botonejercicios.addEventListener("click", () =>{
    const res = promedio2(num6.value, num7.value, num8.value, num9.value, num10.value, num11.value)
    resultado2.textContent = res
})

botonexamen.addEventListener("click", () => {
    const res = promedioexamen(num12.value)
    resultado3.textContent = res
})