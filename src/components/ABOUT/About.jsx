import style from './About.module.css'

const About = () => {
    const miNombre = 'Javier Sosa';
    const edad = '33 años'
    
    return (
        <div>
            <h1 className={style.titulo}>El Autor!! (aunque no lo crean... jaja)</h1>
            <h2 className={style.titulo}>Mi nombre es {miNombre}, y esta es mi historia</h2>
            <p className={style.parrafo} >     
                Hola! Cómo les va?? Me llamo Javier y tengo {edad}, estoy aquí para presentarles,mi dolor de cabeza número 325 con SoyHenry jajaja... Si... me cuesta bastante esto de programar, pero, a pesar de que lo encuentro difícil y me hace renegar bastante, me divierte bastante y me mantiene entretenido
            </p>
            <hr />
            <p className={style.parrafo} >     
                Vivo actualmente en la ciudad de San Miguel de Tucumán, soy estudiante de la Licenciatura de Administración de Empresas, y además estudio desarrollo Web con SoyHenry (El motivo por el cual están leyendo esto).
            </p>
            <hr />
            <p className={style.parrafo} >
                    En fin, ya hablamos mucho de mi, ahora le toca a la App...
            </p>
            <hr />
            <h3 className={style.titulo}>Bienvenidos al Multiverso de Rick and Morty</h3>
            <p className={style.parrafo} >
                En este sitio web podrás conocer a todos y cada uno de los personajes de esta serie 
                tan cómica y popular, que podemos encontrar en diferentes plataformas streeming y canales de 
                televisión según el país en el que te encuentres, si eres de Sudamérica o América central, 
                lo mas probable es que la encuentres en la plataforma "Netflix" y en el canal de TV "Adult Swim" 
            </p>
            <hr />
            <p className={style.parrafo} >     
                Si deseas saber más sobre todos estos curiosos y alocados personajes, 
                estas justo en el sitio correcto! Y lo mejor de todo, es muy simple de hacer! Solo debes dirigirte a la 
                barra de búsqueda y escribir su nombre... No lo sabes?? NO IMPORTA! también podes buscarlo por especie!!
                Tampoco sabes la especie?? No te preocupes, aunque el trabajo va a ser un poco más duro... 
                Son un total de 826 personajes (apuesto a que no sabias que eran taaaantos o sí? jajaja) y cada uno 
                tiene un número de identificación, asi que cualquier número que pongas entre el 1 y el 826 en la barra de
                búsqueda te entregará un personaje luego de hacer "Click" en el botón agregar... 
            </p>
            <hr />
            <p className={style.parrafo} >     
                Te invito a disfrutar del sitio y conocer más de estos bizarros y graciosos personajes que pertenecen al alocado multiverso aventurero de "Rick and Morty". 
            </p>

        </div>
    )

    }
    
    export default About;